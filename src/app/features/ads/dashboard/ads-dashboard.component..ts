import { ToastrService } from 'ngx-toastr';
import { Component } from "@angular/core";
import { AdsService } from "../services/ads.service";
import { Ad, AdDetail, AdDetailWithState } from "../types/ads.types";
import { environment } from "src/environments/environment";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Group } from '../../wa-groups/types/groups.type';
import { CommonFunctionsMixin } from '../mixins/common.mixin';

@Component({
    selector: 'app-ads-dashboard',
    templateUrl: './ads-dashboard.component.html',
    styleUrls: ['./ads-dashboard.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('void', style({ opacity: 0, height: '0' })),
            state('*', style({ opacity: 1, height: '*' })),
            transition(':enter', [animate('150ms ease-in-out')]),
            transition(':leave', [animate('150ms ease-in-out')]),
        ]),
    ]
})
export class AdsDashboardComponent extends CommonFunctionsMixin {
    constructor() {
        super()
    }
    ads: AdDetailWithState[] = []
    apiUrl = environment.apiUrl
    isLoading = false
    detailsRequested: number[] = []
    pollingInterval: any

    getAds() {
        this.isLoading = true
        this.adsService.getAdsDetails().subscribe(ads => {
            this.isLoading = false
            this.ads = ads.sort((a, b) => b.postedAt - a.postedAt).map((ad) => {
                return this.appendAdState(ad)
            })
            console.log(this.ads)
        })

    }

    updateStatePolling(intervalTime: number) {
        if (this.pollingInterval) clearInterval(this.pollingInterval)
        return setInterval(() => {
            this.ads.filter(ad => ad.state === 'PENDING').forEach(ad => {
                if (this.detailsRequested.includes(ad.id)) return
                this.detailsRequested.push(ad.id)
                this.adsService.getAdDetails(ad.id).subscribe({
                    next: (adDetail) => {
                        const adIndex = this.ads.findIndex(a => a.id === ad.id)
                        this.ads[adIndex] = this.appendAdState(adDetail)
                        this.detailsRequested = this.detailsRequested.filter(id => id !== ad.id)
                    },
                    error: (err) => {
                        console.log(err)
                        this.detailsRequested = this.detailsRequested.filter(id => id !== ad.id)
                    }
                })
            })
        }, intervalTime)
    }

    ngOnInit() {
        this.getAds()
        this.pollingInterval = this.updateStatePolling(1000)
    }

    ngOnDestroy() {
        clearInterval(this.pollingInterval)
    }

    remove(ad: AdDetail) {
        this.adsService.deleteAd(ad.id).subscribe({
            next: () => {
                this.ads = this.ads.filter(a => a.id !== ad.id)
            }, error: (err) => {
                console.log(err)
                this.toastr.error(err.error.message)
            }
        })
    }

    adById(index: any, ad: AdDetail) {
        return ad.id;
    }

    cleanWhatsappText(text: string) {
        text = text.replace(/\\r\\n/g, ' ')
        text = text.replace(/\\n/g, ' ')
        text = text.replace(/\\r/g, ' ')
        text = text.replace(/\*(.*?)\*/g, '$1')
        text = text.replace(/_(.*?)_/g, '$1')
        text = text.replace(/~(.*?)~/g, '$1')
        text = text.replace(/```(.*?)```/g, '$1')
        return text
    }
}