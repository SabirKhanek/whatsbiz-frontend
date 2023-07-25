import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdsDashboardComponent } from "./dashboard/ads-dashboard.component.";
import { AdsService } from "./services/ads.service";
import { CoreComponentsModule } from "src/app/core-components/core-components.module";
import { AppMatModule } from "src/app/utils/app-mat/app-mat.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AdListingComponent } from "./ad-listing/ad-listing.component";

@NgModule({
    declarations: [
        AdsDashboardComponent,
        AdListingComponent
    ],
    imports: [
        CommonModule,
        CoreComponentsModule,
        AppRoutingModule,
        AppMatModule
    ],
    providers: [
        AdsService
    ],
    exports: [
        AdListingComponent,
        AdsDashboardComponent
    ]
})
export class AdsModule { }