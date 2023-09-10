import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SearchComponent } from './features/student_staff_search/pages/search/search.component';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { NotFoundComponent } from './features/student_clearance/pages/not-found/not-found.component';
import { ClearnaceApplicationsComponent } from './features/student_clearance/components/clearnace-applications/clearnace-applications.component';
import { ManageAdminComponent } from './features/student_clearance/components/manage-admin/manage-admin.component';
import { CreateAdminComponent } from './features/student_clearance/components/create-admin/create-admin.component';
import { CommitteComponent } from './features/committe-constitution/pages/committe/committe.component';
import { DigitalSignatureComponent } from './features/digital-signature/pages/digital-signature/digital-signature.component';
import { TasksComponent } from './features/task-management/pages/tasks/tasks.component';
import { LayoutComponent } from './features/committe-constitution/layout.component';
import { UserHomeComponent } from './core/components/user-home/user-home.component';
import { ShowupComponent } from './tailwind-directives/showup/showup.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
      component: UserHomeComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'showup',
      component: ShowupComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
        // canActivate: [AuthGuard],
      },
      {
        path: 'clearance-applications',
        loadChildren: () => import('./features/student_clearance/student-clearance.module').then(m=>m.StudentClearanceModule),
        // canActivate: [AuthGuard],
      }, 
      
      {
        path: 'task-management',
        // component: TasksComponent,
        loadChildren: () => import('./features/task-management/task-management.module').then(m => m.TaskManagementModule),
        // canActivate: [AuthGuard],
      },
  
      {
        path: 'committee-constitution',
        loadChildren: () => import('./features/committe-constitution/committe-constitution.module').then(m => m.CommitteConstitutionModule),
      },
      {
        path: 'digital-signature',
        // component: DigitalSignatureComponent,
        loadChildren: () => import('./features/digital-signature/digital-signature.module').then(m => m.DigitalSignatureModule),
        // canActivate: [AuthGuard],
      },

      {
        path: 'manage-admins',
        component: ManageAdminComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'create-new-admin',
        component: CreateAdminComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'search',
        component: SearchComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
