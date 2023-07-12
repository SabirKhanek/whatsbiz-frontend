import { NgModule } from '@angular/core';
import { PostAdComponent } from './dashboard/post-ad.component';
import { CommonModule } from '@angular/common';
import { WaGroupsModule } from '../wa-groups/wa-groups.module';
import { QuillModule } from 'ngx-quill';
import { WhatsappComposerComponent } from './whatsapp-composer/whatsapp-composer.component';
import { FormsModule } from '@angular/forms';
import { CoreComponentsModule } from 'src/app/core-components/core-components.module';

@NgModule({
    declarations: [
        PostAdComponent,
        WhatsappComposerComponent
    ],
    imports: [
        CommonModule,
        WaGroupsModule,
        QuillModule.forRoot(),
        FormsModule,
        CoreComponentsModule
    ],
    exports: [
        PostAdComponent,
        WhatsappComposerComponent
    ]
})
export class PostAdModule { }