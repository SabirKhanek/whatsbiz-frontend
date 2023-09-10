import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeeDiscountComponent } from './pages/fee-discount/fee-discount.component';



const routes: Routes = [

  {
    path: 'discount',
  component: FeeDiscountComponent,
    // canActivate: [AuthGuard],
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}