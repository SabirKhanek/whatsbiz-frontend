import { WaGroupsService } from '../services/groups/wagroups.service';
import { Component, Inject } from "@angular/core";
import { Group } from '../types/groups.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TableDataHeader } from 'src/app/core-components/types/table.types';
import { SelectionModel } from '@angular/cdk/collections';
import { GroupCollection } from '../types/group-collections.type';
import { GroupCollectionsService } from '../services/group-collections/group-collections.service';

@Component({
    selector: 'app-select-groups',
    templateUrl: './select-group-collections.component.html',
    styleUrls: ['./select-group-collections.component.scss']
})
export class SelectGroupCollectionsComponent {
    constructor(private groupCollectionService: GroupCollectionsService, private dialogRef: MatDialogRef<SelectGroupCollectionsComponent>, @Inject(MAT_DIALOG_DATA) public data: SelectGroupCollectionDialogData, private toastr: ToastrService) {
        // Dialog Modal size
        dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
        dialogRef.updateSize('960px', 'auto')

        if (!data?.selected) data.selected = []

        this.selections = new SelectionModel<GroupCollection>(true, [])
    }
    isLoading = false;
    nameFilter = ''
    groupCollections: GroupCollection[] = []
    groupsHeaderDef: TableDataHeader[] = [{
        'columnId': 'select',
        'width': '50'
    }, {
        'columnId': 'name',
        'columnAlias': 'Collection Name'
    }, {
        'columnId': 'groups',
        'columnAlias': 'Groups'
    }]
    selections = new SelectionModel<GroupCollection>
    filteredCollections: GroupCollection[] = []

    filter() {
        this.filteredCollections = this.groupCollections.filter(group => group.name.toLowerCase().includes(this.nameFilter.toLowerCase()))
    }

    remove(row: GroupCollection) {
        this.selections.toggle(row)
    }

    isAllSelected() {
        const numSelected = this.selections.selected.length;
        const numRows = this.filteredCollections.length;
        return numSelected == numRows;
    }


    toggleAllStaffRows() {
        this.isAllSelected() ?
            this.selections.clear() :
            this.filteredCollections.forEach(row => this.selections.select(row));
    }

    getGroupCollections() {
        this.isLoading = true;
        this.groupCollectionService.getGroupCollections().subscribe({
            next: res => {
                if (res.length === 0) {
                    this.toastr.info('No collection is created yet.')
                }
                this.groupCollections = res
                this.isLoading = false
                console.log(this.groupCollections)
                const lengthBefore = this.groupCollections.length
                // filter preselected rows
                this.groupCollections = this.groupCollections.filter((collection) => !this.data?.selected?.map((selected) => selected.id).includes(collection.id))
                console.log(this.groupCollections)
                const lengthAfter = this.groupCollections.length
                if (lengthBefore !== lengthAfter && lengthAfter === 0) this.toastr.info('All the collections are already selected')
                this.filter()
            }, error: err => {
                this.toastr.error(err.error.message || 'Something went wrong.')
            }
        })
    }

    getGroupNames(groups: Group[]) {
        return groups.map(group => group.name).join(', ')
    }

    ngOnInit() {
        this.getGroupCollections()
    }

    close() {
        this.dialogRef.close(this.selections.selected)
    }
}

export type SelectGroupCollectionDialogData = { selected: GroupCollection[] }