import { WaGroupsService } from '../services/groups/wagroups.service';
import { Component, Inject } from "@angular/core";
import { Group } from '../types/groups.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TableDataHeader } from 'src/app/core-components/types/table.types';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-select-groups',
    templateUrl: './select-groups.component.html',
    styleUrls: ['./select-groups.component.scss']
})
export class SelectGroupsComponent {
    constructor(private groupsService: WaGroupsService, private dialogRef: MatDialogRef<SelectGroupsComponent>, @Inject(MAT_DIALOG_DATA) public data: { scope: 'groups-in' | 'groups-not-in' | 'all', collectionId?: number }, private toastr: ToastrService) {
        // Dialog Modal size
        dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
        dialogRef.updateSize('960px', 'auto')
        if (!(data?.scope && data?.scope !== 'all' && data?.collectionId)) {
            this.type = 'all'
        } else {
            this.type = data.scope
            this.collectionId = data.collectionId
        }
    }
    isLoading = false;
    type: 'groups-in' | 'groups-not-in' | 'all' = 'all';
    collectionId: number;
    nameFilter = ''
    groups: Group[] = []
    groupsHeaderDef: TableDataHeader[] = [{
        'columnId': 'select',
        'width': '50'
    }, {
        'columnId': 'name',
        'columnAlias': 'Group Name'
    }, {
        'columnId': 'description',
        'columnAlias': 'Description'
    }, {
        'columnId': 'participants',
        'columnAlias': 'Participants'
    }, {
        'columnId': 'owner',
        'columnAlias': 'Owner'
    }]
    selections = new SelectionModel<Group>(true, [])
    filteredGroups: Group[] = []

    filter() {
        this.filteredGroups = this.groups.filter(group => group.name.toLowerCase().includes(this.nameFilter.toLowerCase()))
    }

    remove(row: Group) {
        this.selections.toggle(row)
    }

    isAllSelected() {
        const numSelected = this.selections.selected.length;
        const numRows = this.filteredGroups.length;
        return numSelected == numRows;
    }


    toggleAllStaffRows() {
        this.isAllSelected() ?
            this.selections.clear() :
            this.filteredGroups.forEach(row => this.selections.select(row));
    }

    getRetrFunction() {
        if (this.type === 'groups-in') {
            return this.groupsService.getGroupsInCollection.bind(this.groupsService);
        } else if (this.type === 'groups-not-in') {
            return this.groupsService.getGroupsNotInCollection.bind(this.groupsService);
        } else {
            return this.groupsService.getGroups.bind(this.groupsService);
        }
    }

    getGroups() {
        this.isLoading = true;
        this.getRetrFunction()(this.collectionId).subscribe({
            next: groups => {
                this.isLoading = false;
                this.groups = groups;
                if (groups.length === 0) {
                    this.toastr.info(`No groups found ${this.type !== 'all' ? `that are ${this.type === 'groups-in' ? 'in' : 'not in'} this collection` : ''}`);
                }
                this.filter()
            },
            error: err => {
                this.isLoading = false;
                this.toastr.error(err.error.message || 'An error occured. Please try again later');
            }
        });
    }



    ngOnInit() {
        this.getGroups()
    }
}