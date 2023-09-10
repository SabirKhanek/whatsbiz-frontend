import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalSignatureComponent } from './pages/digital-signature/digital-signature.component';
import { DigitalSignatureRoutingModule } from './digital-signature-routing.module';
import { RouterModule } from '@angular/router';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { SignComponent } from './pages/sign/sign.component';
import { ValidateComponent } from './pages/validate/validate.component';



@NgModule({
  declarations: [
    DigitalSignatureComponent,SignComponent,ValidateComponent
  ],
  imports: [
    CommonModule,DigitalSignatureRoutingModule,RouterModule,TailwindDirectivesModule
  ]
})
export class DigitalSignatureModule { }