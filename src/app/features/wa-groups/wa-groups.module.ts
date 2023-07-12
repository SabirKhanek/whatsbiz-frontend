import { GroupCollectionsService } from './services/group-collections/group-collections.service';
import { NgModule } from "@angular/core";
import { SelectGroupsComponent } from "./select-groups/select-groups.component";
import { WaGroupsComponent } from "./groups-dashboard/groups.component";
import { CoreComponentsModule } from "src/app/core-components/core-components.module";
import { WaGroupsService } from "src/app/features/wa-groups/services/groups/wagroups.service";
import { CommonModule } from "@angular/common";
import { AppMatModule } from "src/app/utils/app-mat/app-mat.module";
import { WaGroupCollectionsComponent } from './group-collections-dashboard/group-collections.component';
import { SendToGroupCollectionsComponent } from './send-to-group-collections/send-to-group-collections.component';
import { SelectGroupCollectionsComponent } from './select-group-collections/select-group-collections.component';

@NgModule({
    declarations: [
        SelectGroupsComponent,
        WaGroupsComponent,
        WaGroupCollectionsComponent,
        SendToGroupCollectionsComponent,
        SelectGroupCollectionsComponent
    ],
    imports: [
        CommonModule,
        CoreComponentsModule,
        AppMatModule,
    ],
    providers: [WaGroupsService, GroupCollectionsService],
    exports: [
        SelectGroupsComponent,
        WaGroupsComponent,
        SendToGroupCollectionsComponent,
        SelectGroupCollectionsComponent
    ]
})
export class WaGroupsModule { }