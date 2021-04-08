import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerLayoutComponent } from './Layout/inner-layout/inner-layout.component';
import { OuterLayoutComponent } from './Layout/outer-layout/outer-layout.component';
import { OuterHeaderComponent } from './Layout/outer-layout/outer-header/outer-header.component';
import { OuterFooterComponent } from './Layout/outer-layout/outer-footer/outer-footer.component';
import { InnerHeaderComponent } from './Layout/inner-layout/inner-header/inner-header.component';
import { InnerFooterComponent } from './Layout/inner-layout/inner-footer/inner-footer.component';
import { InnerSidebarComponent } from './Layout/inner-layout/inner-sidebar/inner-sidebar.component';
import { LoginComponent } from './Pages/login/login.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { BankManagementComponent } from './Pages/bank-management/bank-management.component';
import { AccademicLevelCoursesComponent } from './Pages/accademic-level-courses/accademic-level-courses.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { AddCoursesAcademiclevelComponent } from './Pages/accademic-level-courses/add-courses-academiclevel/add-courses-academiclevel.component';
import { ViewCoursesAcademiclevelComponent } from './Pages/accademic-level-courses/view-courses-academiclevel/view-courses-academiclevel.component';
import { InstituesComponent } from './Pages/institues/institues.component';
import { CategorysComponent } from './Pages/categorys/categorys.component';
import { CourcesComponent } from './Pages/cources/cources.component';
import { DiffernetDesksComponent } from './Pages/differnet-desks/differnet-desks.component';
import { AddDeskComponent } from './Pages/differnet-desks/add-desk/add-desk.component';


@NgModule({
  declarations: [
    AppComponent,
    InnerLayoutComponent,
    OuterLayoutComponent,
    OuterHeaderComponent,
    OuterFooterComponent,
    InnerHeaderComponent,
    InnerFooterComponent,
    InnerSidebarComponent,
    LoginComponent,
    ControlMessagesComponent,
    DashboardComponent,
    BankManagementComponent,
    AccademicLevelCoursesComponent,
    SettingsComponent,
    AddCoursesAcademiclevelComponent,
    ViewCoursesAcademiclevelComponent,
    InstituesComponent,
    CategorysComponent,
    CourcesComponent,
    DiffernetDesksComponent,
    AddDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
