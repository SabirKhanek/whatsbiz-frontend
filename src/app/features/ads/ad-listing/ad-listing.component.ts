import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonFunctionsMixin } from '../mixins/common.mixin'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AdDetailWithState } from '../types/ads.types'
import { TableDataHeader } from 'src/app/core-components/types/table.types'
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-ad-listing',
    templateUrl: './ad-listing.component.html',
    styleUrls: ['./ad-listing.component.scss']
})
export class AdListingComponent extends CommonFunctionsMixin implements OnInit, OnDestroy {
    adId: number | undefined;
    ad: AdDetailWithState;
    isLoading = false;
    progress = 0;
    apiUrl = environment.apiUrl
    pollingInterval: any
    adTableHeaders: TableDataHeader[] = [
        { columnId: 'name', columnAlias: 'Group' },
        { columnId: 'description', columnAlias: 'Group Description' },
        { columnId: 'participants', columnAlias: 'Participants' },
        { columnId: 'status', columnAlias: 'Status' },
    ]
    constructor(private route: ActivatedRoute, private router: Router) {
        super()
    }

    remove(ad: AdDetailWithState) {
        this.adsService.deleteAd(ad.id).subscribe({
            next: () => {
                this.toastr.success('Ad deleted successfully')
                this.router.navigate(['/ads'])
            }, error: (err) => {

                this.toastr.error(err.error.message)
            }
        })
    }

    WaFormatToHtml(text: string): string {
        let htmlContent: string = text;
        if (htmlContent.length <= 0) return `<p class="text-gray-400">This ad has no text.</p>`

        // Convert bold formatting
        htmlContent = htmlContent.replace(/\*(.*?)\*/g, '<strong>$1</strong>');

        // Convert italic formatting
        htmlContent = htmlContent.replace(/_(.*?)_/g, '<em>$1</em>');

        // Convert strikethrough formatting
        htmlContent = htmlContent.replace(/~(.*?)~/g, '<s>$1</s>');

        // Convert code block formatting
        htmlContent = htmlContent.replace(/```([\s\S]*?)```/g, '<pre class="block whitespace-pre-wrap my-1 font-mono p-1 text-white bg-slate-900 rounded w-full">$1</pre>');

        // Convert new line characters to <p></p>
        htmlContent = htmlContent.replace(/\n/g, '<br>').trim();

        // Wrap each line with <p> tags
        const lines = htmlContent.split('<br>');
        htmlContent = lines.map(line => `<p>${line === '' ? '<br>' : line}</p>`).join('');

        return htmlContent;
    }


    updateAdInfoPolling() {
        if (this.pollingInterval) clearInterval(this.pollingInterval)
        return setInterval(() => {
            if (this.isLoading || this.ad.state !== 'PENDING') return
            this.isLoading = true
            this.adsService.getAdDetails(this.adId as number).subscribe({
                next: (adDetail) => {
                    this.ad = this.appendAdState(adDetail)
                    this.isLoading = false
                    this.setProgress()
                },
                error: (err) => {
                    this.isLoading = false
                }
            })
        }, 2000)
    }

    groupById(index: any, ad: any) {
        return ad.id;
    }

    setProgress() {
        const groups = this.getGroups(this.ad)
        const pendingGroups = this.getPendingGroups(this.ad)
        this.progress = ((groups.length - pendingGroups.length) / groups.length) * 100
    }

    ngOnInit(): void {
        this.adId = this.route.snapshot.params['id']
        if (!this.adId) {
            this.router.navigate(['/ads'])
            this.toastr.error('Ad Id not found in URL', 'Bad Request')
        }
        this.adsService.getAdDetails(this.adId as number).subscribe({
            next: (adDetail) => {
                this.ad = this.appendAdState(adDetail)
                this.setProgress()
            },
            error: (err) => {
                this.toastr.error(err.error.message, 'Error fetching Ad Details')
                this.router.navigate(['/ads'])
            }
        })
        this.pollingInterval = this.updateAdInfoPolling()
    }

    ngOnDestroy() {
        clearInterval(this.pollingInterval)
    }
}