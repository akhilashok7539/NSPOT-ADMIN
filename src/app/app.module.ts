import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
import { DesktypeComponent } from './Pages/desktype/desktype.component';
import { ViewSubcatComponent } from './Pages/categorys/view-subcat/view-subcat.component';
import { EditCategorysComponent } from './Pages/categorys/edit-categorys/edit-categorys.component';
import { SchoolAdmissionDeskComponent } from './Pages/school-admission-desk/school-admission-desk.component';
import { DegreeCoursesRegularComponent } from './Pages/degree-courses-regular/degree-courses-regular.component';
import { DegreeCoursesDistanceComponent } from './Pages/degree-courses-distance/degree-courses-distance.component';
import { DiplomaCoursesAddmissionComponent } from './Pages/diploma-courses-addmission/diploma-courses-addmission.component';
import { CertificateCoursesAddmissionComponent } from './Pages/certificate-courses-addmission/certificate-courses-addmission.component';
import { EntranceExamCoursesComponent } from './Pages/entrance-exam-courses/entrance-exam-courses.component';
import { CompetitiveExamCoursesComponent } from './Pages/competitive-exam-courses/competitive-exam-courses.component';
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
// import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import {LoaderInterceptor} from './interceptors/loadingInterceptor';
import { ViewDetialedComponent } from './Pages/institues/view-detialed/view-detialed.component';
import { FilterComponent } from './components/filter/filter.component';
import { StatesComponent } from './Pages/states/states.component';
import { DistrictComponent } from './Pages/district/district.component';
import { AddStatesComponent } from './Pages/states/add-states/add-states.component';
import { AddDistrictComponent } from './Pages/district/add-district/add-district.component';
import { UniverisitiesComponent } from './Pages/univerisities/univerisities.component';
import { AddUniversityComponent } from './Pages/univerisities/add-university/add-university.component';
import { UpdateUniversityComponent } from './Pages/univerisities/update-university/update-university.component';
import { BoardComponent } from './Pages/settings/board/board.component';
import { OtherboardsComponent } from './Pages/settings/otherboards/otherboards.component';
import { AddBoardComponent } from './Pages/settings/board/add-board/add-board.component';
import { EditBoardComponent } from './Pages/settings/board/edit-board/edit-board.component';
import { AddOtherboardComponent } from './Pages/settings/otherboards/add-otherboard/add-otherboard.component';
import { UpdateOtherboardComponent } from './Pages/settings/otherboards/update-otherboard/update-otherboard.component';
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
    DesktypeComponent,
    ViewSubcatComponent,
    EditCategorysComponent,
    SchoolAdmissionDeskComponent,
    DegreeCoursesRegularComponent,
    DegreeCoursesDistanceComponent,
    DiplomaCoursesAddmissionComponent,
    CertificateCoursesAddmissionComponent,
    EntranceExamCoursesComponent,
    CompetitiveExamCoursesComponent,
    AddDesktypeComponent,
    Subcatgory2Component,
    Subcatgory3Component,
    Subcatgory4Component,
    Subcatgory5Component,
    AddSubcat2Component,
    EditSubcat2Component,
    AddSubcat3Component,
    EditSubcat3Component,
    AddSubcat4Component,
    EditSubcat4Component,
    AddSubcat5Component,
    EditSubcat5Component,
    ViewDetialedComponent,
    FilterComponent,
    StatesComponent,
    DistrictComponent,
    AddStatesComponent,
    AddDistrictComponent,
    UniverisitiesComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    BoardComponent,
    OtherboardsComponent,
    AddBoardComponent,
    EditBoardComponent,
    AddOtherboardComponent,
    UpdateOtherboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTooltipModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  // entryComponents:[EditSubcat5Component,EditSubcat4Component,EditSubcat3Component,EditSubcat2Component,EditCategorysComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
