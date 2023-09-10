import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DigitalSignatureComponent } from './pages/digital-signature/digital-signature.component';
import { SignComponent } from './pages/sign/sign.component';
import { ValidateComponent } from './pages/validate/validate.component';



const routes: Routes = [

    {
        path: 'sign',
      component: SignComponent,
        // canActivate: [AuthGuard],
      }, 
      {
        path: 'verify',
      component: ValidateComponent,
        // canActivate: [AuthGuard],
      },   

  {
    path: '**',
  component: DigitalSignatureComponent,
    // canActivate: [AuthGuard],
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalSignatureRoutingModule {}