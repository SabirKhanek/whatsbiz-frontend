import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { GroupCollection } from '../types/group-collections.type';
import { GroupCollectionsService } from '../services/group-collections/group-collections.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { InputModalComponent, InputModalData } from 'src/app/core-components/input-modal/input-modal.component';
import { SelectGroupCollectionsComponent, SelectGroupCollectionDialogData } from '../select-group-collections/select-group-collections.component';

@Component({
    selector: 'app-group-collections',
    templateUrl: './group-collections.component.html',
    styleUrls: ['./group-collections.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('void', style({ opacity: 0, height: '0' })),
            state('*', style({ opacity: 1, height: '*' })),
            transition(':enter', [animate('150ms ease-in-out')]),
            transition(':leave', [animate('150ms ease-in-out')]),
        ]),
    ]
})
export class WaGroupCollectionsComponent implements OnInit {
    constructor(private collectionService: GroupCollectionsService, private dialog: MatDialog, private toastr: ToastrService) { }

    collectionsLoading = false;
    collections: GroupCollection[] = []
    expandableCollections: any = []

    getExpandableCollections() {
        return this.collections.map(collection => { return { ...collection, expanded: false } })
    }

    ngOnInit(): void {
        this.refreshCollections()
    }

    refreshCollections() {
        this.collectionsLoading = true;
        this.collectionService.getGroupCollections().subscribe(collections => {
            this.collectionsLoading = false;
            this.collections = collections;
            this.expandableCollections = this.getExpandableCollections();
        })
    }

    addNewCollection() {
        const data: InputModalData = { title: 'Add new collection', fields: [{ id: 'name', label: 'Collection name', value: '' }] }
        this.dialog.open(InputModalComponent, {
            data: data
        }).afterClosed().subscribe(result => {
            if (result) {
                this.collectionService.createGroupCollection(result.name).subscribe({
                    next: (res) => {
                        this.collections.push(res)
                        this.expandableCollections = this.getExpandableCollections();
                    },
                    error: (err) => {
                        console.log(err)
                        this.toastr.error(err.error.message)
                    }
                })
            }
        })
    }

    collectionById(index: any, collection: GroupCollection) {
        return collection.id;
    }

    remove(collection: GroupCollection) {
        this.collectionService.deleteGroupCollection(collection.id).subscribe({
            next: (res) => {
                this.collections = this.collections.filter(c => c.id !== collection.id)
                this.expandableCollections = this.getExpandableCollections();
            },
            error: (err) => {
                this.toastr.error(err.error.message)
            }
        })
    }


    edit(collection: GroupCollection) {
        const data: InputModalData = { title: 'Edit collection', fields: [{ id: 'name', label: 'Collection name', value: collection.name }] }
        this.dialog.open(InputModalComponent, { data: data }).afterClosed().subscribe(result => {
            if (result) {
                this.collectionService.renameGroupCollection(collection.id, result.name).subscribe({
                    next: (res) => {
                        this.collections = this.collections.map(c => {
                            if (c.id === collection.id) {
                                c.name = result.name;
                            }
                            return c;
                        })
                        this.expandableCollections = this.getExpandableCollections();
                    },
                    error: (err) => {
                        this.toastr.error(err.error.message)
                    }
                })
            }
        })
    }

    openCollectionSelector() {
        const dialogData: SelectGroupCollectionDialogData = { selected: [{ id: 1, name: 'new' }] }
        this.dialog.open(SelectGroupCollectionsComponent, { data: dialogData }).afterClosed().subscribe(result => {
            if (result) {
                console.log(result)
            }
        })
    }

}