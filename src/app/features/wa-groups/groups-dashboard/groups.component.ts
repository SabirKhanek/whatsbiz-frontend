import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SelectGroupsComponent } from "../select-groups/select-groups.component";
import { WaGroupsService } from '../services/groups/wagroups.service';
import { Group } from "../types/groups.type";
import { TableDataHeader } from "src/app/core-components/types/table.types";

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class WaGroupsComponent implements OnInit {
    @Input('collectionId') collectionId: number = 0;
    groups: Group[] = [];
    groupsHeaderDef: TableDataHeader[] = [{
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
    }, {
        'columnId': 'delete',
        'columnAlias': 'Delete'
    }]
    isGroupsLoading: boolean = false;
    constructor(private dialog: MatDialog, private groupService: WaGroupsService, private toastr: ToastrService) {

    }

    addGroupToCollection() {
        this.dialog.open(SelectGroupsComponent, { data: { scope: 'groups-not-in', collectionId: this.collectionId } }).afterClosed().subscribe((result: Group[]) => {
            const groupIds = result.map((group) => { return group.id })
            this.groupService.addGroupsInCollection(this.collectionId, groupIds).subscribe((res) => {
                console.log(res)
                this.fetchGroups()
            })
        })
    }

    deleteGroupFromCollection(groupId: string) {
        this.groupService.removeGroupFromCollection(this.collectionId, groupId).subscribe((res) => {
            console.log(res)
            this.fetchGroups()
        })
    }

    fetchGroups() {
        this.isGroupsLoading = true;
        this.groupService.getGroupsInCollection(this.collectionId).subscribe({
            next: (groups) => {
                this.groups = groups;
                this.isGroupsLoading = false;
            }, error: (err) => {
                this.isGroupsLoading = false;
                this.toastr.error('Something went wrong.')
                console.log(err)
            }
        })
    }

    ngOnInit(): void {
        this.fetchGroups()
    }

    openDialog() {
        this.dialog.open(SelectGroupsComponent, { data: { scope: 'groups-in', collectionId: 2 } }).afterClosed().subscribe(result => {
            console.log(result);
        })
    }
}