import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerLayoutComponent } from './Layout/inner-layout/inner-layout.component';
import { AccademicLevelCoursesComponent } from './Pages/accademic-level-courses/accademic-level-courses.component';
import { ViewCoursesAcademiclevelComponent } from './Pages/accademic-level-courses/view-courses-academiclevel/view-courses-academiclevel.component';
import { BankManagementComponent } from './Pages/bank-management/bank-management.component';
import { CategorysComponent } from './Pages/categorys/categorys.component';
import { CourcesComponent } from './Pages/cources/cources.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { InstituesComponent } from './Pages/institues/institues.component';
import { LoginComponent } from './Pages/login/login.component';
import { SettingsComponent } from './Pages/settings/settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: InnerLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'institute-bank-management', component: BankManagementComponent },
      { path: 'accademic-levels-and-courses', component: AccademicLevelCoursesComponent },
      { path: 'view-accademic-levels-and-courses', component: ViewCoursesAcademiclevelComponent },
      { path: 'all-institute', component: InstituesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'categorys', component: CategorysComponent },
      { path: 'courses', component: CourcesComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
