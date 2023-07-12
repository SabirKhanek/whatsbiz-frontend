import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Group } from '../../types/groups.type';
import { GroupCollection } from '../../types/group-collections.type';

@Injectable({
    providedIn: 'root'
})
export class WaGroupsService {
    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    getGroups() {
        return this.http.get<Group[]>(`${this.apiUrl}/whatsapp/groups`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    getGroupsInCollection(collectionId: number) {
        return this.http.get<Group[]>(`${this.apiUrl}/whatsapp/group-collections/groups?collectionId=${collectionId}`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    getGroupsNotInCollection(collectionId: number) {
        return this.http.get<Group[]>(`${this.apiUrl}/whatsapp/group-collections/groups-not-in?collectionId=${collectionId}`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    addGroupsInCollection(collectionId: number, groupIds: string[]) {
        return this.http.post<{ [key: string]: GroupCollection | string }>(`${this.apiUrl}/whatsapp/group-collections/groups`, {
            collectionId,
            groupIds
        }, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    removeGroupFromCollection(collectionId: number, groupId: string) {
        return this.http.delete(`${this.apiUrl}/whatsapp/group-collections/groups?collectionId=${collectionId}&groupId=${groupId}`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }


}