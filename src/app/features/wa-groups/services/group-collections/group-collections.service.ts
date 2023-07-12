import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupCollection } from '../../types/group-collections.type';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GroupCollectionsService {
    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    getGroupCollections() {
        return this.http.get<GroupCollection[]>(`${this.apiUrl}whatsapp/group-collections`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    getGroupCollection(id: number) {
        return this.http.get<GroupCollection>(`${this.apiUrl}whatsapp/group-collections?collectionId=${id}`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        });
    }

    createGroupCollection(name: string) {
        return this.http.post<GroupCollection>(`${this.apiUrl}whatsapp/group-collections`, {
            name
        }, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }

    renameGroupCollection(id: number, name: string) {
        const reqObj = {
            collectionId: id,
            newName: name
        }
        return this.http.put<GroupCollection>(`${this.apiUrl}whatsapp/group-collections`, reqObj, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }

    deleteGroupCollection(id: number) {
        return this.http.delete(`${this.apiUrl}whatsapp/group-collections?collectionId=${id}`, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }

    postAd(collectionIds: number[], adText: string, adImage?: ArrayBuffer | string | null) {
        const formData = new FormData();
        formData.append('collectionIds', JSON.stringify(collectionIds));
        formData.append('adText', adText);

        if (adImage) {
            const file = this.dataURLtoFile(this.arrayBufferToBase64(adImage), 'adImage.png');
            formData.append('adImage', file);
        }
        console.log(formData);
        return this.http.post(`${this.apiUrl}whatsapp/group-collections/ad`, formData, {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }

    arrayBufferToBase64(buffer: ArrayBuffer | string): string {
        if (typeof buffer === 'string') return buffer
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    dataURLtoFile(dataURL: string, filename: string): File {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)?.[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
}