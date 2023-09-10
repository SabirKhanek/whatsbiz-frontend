import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeDiscountComponent } from './pages/fee-discount/fee-discount.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';

@NgModule({
  declarations: [
    FeeDiscountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    TailwindDirectivesModule
  ]
})
export class AuthModule { }
