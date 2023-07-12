import { ToastrService } from 'ngx-toastr';
import { GroupCollectionsService } from './../services/group-collections/group-collections.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { GroupCollection } from '../types/group-collections.type'
import { MatDialog } from '@angular/material/dialog';
import { SelectGroupCollectionDialogData, SelectGroupCollectionsComponent } from '../select-group-collections/select-group-collections.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
    selector: 'app-send-to-group-collections',
    templateUrl: './send-to-group-collections.component.html',
    styleUrls: ['./send-to-group-collections.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('void', style({ opacity: 0, width: '0' })),
            state('*', style({ opacity: 1, width: '*' })),
            transition(':enter', [animate('150ms ease-in-out')]),
            transition(':leave', [animate('150ms ease-in-out')]),
        ]),
    ]
})
export class SendToGroupCollectionsComponent implements OnInit {
    @Input('text') text = ''
    @Input('image') image: ArrayBuffer | string | null = null
    @Output('onRequestSent') onRequestSent = new EventEmitter<string>()

    collections: GroupCollection[] = []
    constructor(private collectionService: GroupCollectionsService, private dialog: MatDialog, private socket: SocketService, private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    remove(collection: GroupCollection) {
        this.collections = this.collections.filter(c => c.id !== collection.id)
    }

    add() {
        this.openCollectionSelector()
    }

    collectionById(index: any, collection: GroupCollection) {
        return collection.id;
    }

    openCollectionSelector() {
        const dialogData: SelectGroupCollectionDialogData = { selected: this.collections }
        this.dialog.open(SelectGroupCollectionsComponent, { data: dialogData }).afterClosed().subscribe(result => {
            if (result) {
                console.log(result)
                this.collections.push(...result)
            }
        })
    }

    async onSend() {
        try {
            const isWAConnected = await this.socket.isWAConnected().toPromise()

            console.log('Waconenction?: ' + isWAConnected?.result)
            if (!isWAConnected?.result) {
                throw new Error('WA is not connected')
            }
        } catch (err) {
            this.toastr.error('Please connect to WA first')
            return
        }

        const collectionIds = this.collections.map((collection) => collection.id)
        this.collectionService.postAd(collectionIds, this.text, this.image).subscribe({
            next: (res) => {
                this.toastr.info('Ads are being posted to groups')
                this.onRequestSent.emit('Ads are being posted to groups')
            }, error: (err) => {
                this.toastr.error('Error while posting ads to groups')
            }
        })
    }

    sendRequest() {
        if (this.collections.length === 0) {
            return this.onRequestSent.emit('Please select at least one group collection')
        }
        this.collections.forEach((collection => {
            collection.groups?.forEach(group => {
                this.socket.sendMessageWA(this.text, group.id).subscribe((res) => {
                    this.toastr.success(`Message sent to ${group.name} - Collection ${collection.name}`)
                })
            })
        }))
        this.onRequestSent.emit('Request sent to group collections')
    }
}