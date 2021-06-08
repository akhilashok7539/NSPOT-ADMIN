import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerLayoutComponent } from './Layout/inner-layout/inner-layout.component';
import { AccademicLevelCoursesComponent } from './Pages/accademic-level-courses/accademic-level-courses.component';
import { ViewCoursesAcademiclevelComponent } from './Pages/accademic-level-courses/view-courses-academiclevel/view-courses-academiclevel.component';
import { BankManagementComponent } from './Pages/bank-management/bank-management.component';
import { CategorysComponent } from './Pages/categorys/categorys.component';
import { CourcesComponent } from './Pages/cources/cources.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DesktypeComponent } from './Pages/desktype/desktype.component';
import { InstituesComponent } from './Pages/institues/institues.component';
import { LoginComponent } from './Pages/login/login.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { AddDesktypeComponent } from './Pages/dashboard/add-desktype/add-desktype.component';

import { Subcatgory2Component } from './Pages/subcatgory2/subcatgory2.component';
import { Subcatgory3Component } from './Pages/subcatgory3/subcatgory3.component';
import { Subcatgory4Component } from './Pages/subcatgory4/subcatgory4.component';
import { Subcatgory5Component } from './Pages/subcatgory5/subcatgory5.component';
import { AddSubcat2Component } from './Pages/subcatgory2/add-subcat2/add-subcat2.component';
import { EditSubcat2Component } from './Pages/subcatgory2/edit-subcat2/edit-subcat2.component';
import { AddSubcat3Component } from './Pages/subcatgory3/add-subcat3/add-subcat3.component';
import { EditSubcat3Component } from './Pages/subcatgory3/edit-subcat3/edit-subcat3.component';
import { AddSubcat4Component } from './Pages/subcatgory4/add-subcat4/add-subcat4.component';
import { EditSubcat4Component } from './Pages/subcatgory4/edit-subcat4/edit-subcat4.component';
import { AddSubcat5Component } from './Pages/subcatgory5/add-subcat5/add-subcat5.component';
import { EditSubcat5Component } from './Pages/subcatgory5/edit-subcat5/edit-subcat5.component';
import { EditCategorysComponent } from './Pages/categorys/edit-categorys/edit-categorys.component';
import { ViewDetialedComponent } from './Pages/institues/view-detialed/view-detialed.component';
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
      { path: 'institute-detailed/:id', component: ViewDetialedComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'categorys', component: CategorysComponent },
      { path: 'edit-categorys', component: EditCategorysComponent },

      { path: 'courses', component: CourcesComponent },
      { path: 'add-newdesk', component: DesktypeComponent },
      { path: 'add', component: AddDesktypeComponent },
      { path: 'subcat2', component: Subcatgory2Component },
      { path: 'subcat3', component: Subcatgory3Component },
      { path: 'subcat4', component: Subcatgory4Component },
      { path: 'subcat5', component: Subcatgory5Component },

      { path: 'add-subcat2', component: AddSubcat2Component },
      { path: 'edit-subcat2', component: EditSubcat2Component },

      { path: 'add-subcat3', component: AddSubcat3Component },
      { path: 'edit-subcat3', component: EditSubcat3Component },

      { path: 'add-subcat4', component: AddSubcat4Component },
      { path: 'edit-subcat4', component: EditSubcat4Component },

      { path: 'add-subcat5', component: AddSubcat5Component },
      { path: 'edit-subcat5', component: EditSubcat5Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
