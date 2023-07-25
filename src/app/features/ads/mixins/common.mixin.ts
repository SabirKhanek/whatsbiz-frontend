import { inject } from "@angular/core"
import { Group } from "../../wa-groups/types/groups.type"
import { AdsService } from "../services/ads.service"
import { AdDetail, AdDetailWithState } from "../types/ads.types"
import { ToastrService } from "ngx-toastr"

export abstract class CommonFunctionsMixin {
    protected adsService: AdsService
    protected toastr: ToastrService
    constructor() {
        this.adsService = inject(AdsService)
        this.toastr = inject(ToastrService)
    }

    isAdPending(ad: AdDetail) {
        const adPending = ad.groups.filter(group => group.status === 'PENDING')
        return adPending.length > 0
    }

    getPendingGroups(ad: AdDetail) {
        const adPending = ad.groups.filter(group => group.status === 'PENDING')
        const groups: Group[] = adPending.map(group => group.group)
        return groups
    }

    getGroups(ad: AdDetail) {
        const groups: Group[] = ad.groups.map(group => group.group)
        return groups
    }

    getGroupsWithStatus(ad: AdDetail) {
        type GroupWithStatus = Group & { status: 'PENDING' | 'SUCCESS' | 'FAILED' }
        const groups: GroupWithStatus[] = ad.groups.map(group => {
            (group.group as any).status = group.status
            return (group.group as GroupWithStatus)
        })
        return groups
    }

    isAdFailed(ad: AdDetail) {
        const adFailed = ad.groups.filter(group => group.status === 'FAILED')
        return adFailed.length > 0
    }

    getFailedGroups(ad: AdDetail) {
        const adFailed = ad.groups.filter(group => group.status === 'FAILED')
        const groups: Group[] = adFailed.map(group => group.group)
        return groups
    }

    getSuccessGroups(ad: AdDetail) {
        const adSuccess = ad.groups.filter(group => group.status === 'SUCCESS')
        const groups: Group[] = adSuccess.map(group => group.group)
        return groups
    }

    appendAdState(ad: AdDetail): AdDetailWithState {
        const state: 'PENDING' | 'FAILED' | 'SUCCESS' = this.isAdPending(ad) ? 'PENDING' : (this.isAdFailed(ad) ? 'FAILED' : 'SUCCESS')

        const pendingGroups = this.getPendingGroups(ad)
        return { ...ad, state, pendingGroups }
    }

    retry(ad: AdDetailWithState) {
        this.toastr.info('Retrying Failed ads is under development.', 'Retrying')
    }
}