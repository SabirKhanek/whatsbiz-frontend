import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './core/components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { LoginComponent } from './core/components/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ClearnaceApplicationsComponent } from './features/student_clearance/components/clearnace-applications/clearnace-applications.component';
import { ClearanceConfirmDialogComponent } from './features/student_clearance/components/clearnace-applications/clearance-confirm-dialog/clearance-confirm-dialog.component';
import { ManageAdminComponent } from './features/student_clearance/components/manage-admin/manage-admin.component';
import { CreateAdminComponent } from './features/student_clearance/components/create-admin/create-admin.component';
import { SearchComponent } from './features/student_staff_search/pages/search/search.component';
import { CommitteConstitutionModule } from './features/committe-constitution/committe-constitution.module';
import { UserHomeComponent } from './core/components/user-home/user-home.component';
import { SharedModule } from './shared/shared.module';
import { AppMatModule } from './utils/app-mat/app-mat.module';
import { TailwindDirectivesModule } from './tailwind-directives/tailwind-directives.module';
import { AppTableModule } from './utils/app-table/table.module';
import { DigitalSignatureModule } from './features/digital-signature/digital-signature.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    // ClearnaceApplicationsComponent,
    // ClearanceConfirmDialogComponent,
    ManageAdminComponent,
    CreateAdminComponent,
    SearchComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CommitteConstitutionModule,
    SharedModule,
    AppMatModule, TailwindDirectivesModule,
    AppTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
