import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgGridModule } from 'ag-grid-angular';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { TreeModule } from 'primeng/tree';
// Components
import { EducationalComponent } from './educational/educational.component';
import { GeneralComponent } from './general/general.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProfessionalComponent } from './professional/professional.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { PersonalDataFormComponent } from './personal-data-form/personal-data-form.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BirthdayCardComponent } from './birthday-card/birthday-card.component';
import { NewHiresComponent } from './new-hires-card/new-hires-card.component';
import { EmployeeDetailsComponent } from './new-hires-card/employee-details/employee-details.component';
import { EditEmployeeComponent } from './new-hires-card/edit-employee/edit-employee.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { ApplyLeaveComponent } from './leave-summary/apply-leave/apply-leave.component';
import { TeamsComponent } from './teams/teams.component';
import { LeaveReporteesComponent } from './leave-reportees/leave-reportees.component';
import { OnLeaveComponent } from './onleave/onleave.component';
import { LeaveTrackingComponent } from './leave-tracking/leave-tracking.component';
import { MyDataComponent } from './my-data/my-data.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveRequestsComponent } from './leave-request/leave-request.component';
import { LeaveReportDashboardComponent } from './leave-report-dashboard/leave-report-dashboard.component';
import { ApprovalLeaveRequestComponent } from './approval-leave-request/approval-leave-request.component';
import { CalendarComponent } from './calendar/calendar.component';
import { INITIAL_EVENTS } from './calendar/event-utils';
import { TeamsDashboardComponent } from './teams-dashboard/teams-dashboard.component';
import { TeamsSpaceComponent } from './teams-space/teams-space.component';
import { LogOutComponent } from './log-out/log-out.component';
import { GoalsComponent } from './goals/goals.component';
import { AddGoalsComponent } from './add-goals/add-goals.component';
import { CommentsComponent } from './comments/comments.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { HomeMyDataComponent } from './home-my-data/home-my-data.component';
import { OverviewComponent } from './overview/overview.component';
import { TeamReporteesComponent } from './team-reportees/team-reportees.component';
import { TeamDepartmentComponent } from './team-department/team-department.component';
import { TeamProjectComponent } from './team-project/team-project.component';
import { TeamListComponent } from './team-list/team-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { DeleteGoalsComponent } from './delete-goals/delete-goals.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PerformanceMyDataComponent } from './performance-my-data/performance-my-data.component';
import { GoalsMyDataComponent } from './goals-my-data/goals-my-data.component';
import { SkillsetPerformanceComponent } from './skillset-performance/skillset-performance.component';
import { CompetencyComponent } from './competency/competency.component';
import { PerformanceFeedbackComponent } from './performance-feedback/performance-feedback.component';
import { NgFor, NgIf } from '@angular/common';
import { MoreOptionsComponent } from './more-options/more-options.component';
import { TrackTaskComponent } from './track-task/track-task.component';
import { TaskTasksComponent } from './task-tasks/task-tasks.component';
import { TaskNavsComponent } from './task-navs/task-navs.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { FormViewComponent } from './form-view/form-view.component';
import { EmployeeTreeComponent } from './employee-tree/employee-tree.component';
import { DepartmentDirectoryComponent } from './department-directory/department-directory.component';
import { PoliciesComponent } from './policies/policies.component';
import { DepartmentTreeComponent } from './department-tree/department-tree.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FeedsComponent } from './feeds/feeds.component';
import { OperationComponent } from './operation/operation.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    EducationalComponent,
    SkillsetComponent,
    ProfessionalComponent,
    HeaderComponent,
    DetailsComponent,
    PersonalDataFormComponent,
    DashboardComponent,
    BirthdayCardComponent,
    NewHiresComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    LeaveSummaryComponent,
    ApplyLeaveComponent,
    TeamsComponent,
    LeaveReporteesComponent,
    OnLeaveComponent,
    LeaveTrackingComponent,
    MyDataComponent,
    LeaveBalanceComponent,
    LeaveRequestsComponent,
    LeaveReportDashboardComponent,
    ApprovalLeaveRequestComponent,
    CalendarComponent,
    TeamsDashboardComponent,
    TeamsSpaceComponent,
    GoalsComponent,
    AddGoalsComponent,
    CommentsComponent,
    LogOutComponent,
    NewHomeComponent,
    HomeMyDataComponent,
    OverviewComponent,
    TeamReporteesComponent,
    TeamDepartmentComponent,
    TeamProjectComponent,
    TeamListComponent,
    OrganizationComponent,
    DeleteGoalsComponent,
    PerformanceMyDataComponent,
    GoalsMyDataComponent,
    SkillsetPerformanceComponent,
    CompetencyComponent,
    PerformanceFeedbackComponent,
    MoreOptionsComponent,
    TrackTaskComponent,
    TaskTasksComponent,
    TaskNavsComponent,
    MyTaskComponent,
    FormViewComponent,
    EmployeeDetailsComponent,
    DepartmentDirectoryComponent,
    DepartmentTreeComponent,
    PoliciesComponent,
    AnnouncementsComponent,
    EmployeeTreeComponent,
    FeedsComponent,
    OperationComponent,
    ReportsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AgGridModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    CalendarModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    FullCalendarModule,
    INITIAL_EVENTS,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    NgIf,
    NgFor,
    TreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
