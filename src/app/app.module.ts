import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyJobFeedFComponent } from './my-job-feed-f/my-job-feed-f.component';
import { MyCurrentJobsFComponent } from './my-current-jobs-f/my-current-jobs-f.component';
import { ReportsFComponent } from './reports-f/reports-f.component';
import { TransactionFComponent } from './transaction-f/transaction-f.component';
import { ProposalFComponent } from './proposal-f/proposal-f.component';
import { PaymentMethodCComponent } from './payment-method-c/payment-method-c.component';
import { TransactionCComponent } from './transaction-c/transaction-c.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { TalentComponent } from './talent/talent.component';
import { ProfileCComponent } from './profile-c/profile-c.component';
import { ProfileFComponent } from './profile-f/profile-f.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';
import { ProposalcComponent } from './proposalc/proposalc.component';
import { PostedJobCComponent } from './posted-job-c/posted-job-c.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HowItWorksComponent,
    EnterpriseComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ClientComponent,
    FreelancerComponent,
    MyJobFeedFComponent,
    MyCurrentJobsFComponent,
    ReportsFComponent,
    TransactionFComponent,
    ProposalFComponent,
    PaymentMethodCComponent,
    TransactionCComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    TalentComponent,
    ProfileCComponent,
    ProfileFComponent,
    JobcreateComponent,
    ProjectcreateComponent,
    ProposalcComponent,
    PostedJobCComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFileUploaderModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "project",
        component: ProjectComponent
      },
      {
        path: "how-it-works",
        component: HowItWorksComponent
      },
      {
        path: "enterprise",
        component: EnterpriseComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "admin",
        component: AdminComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "freelancer",
        component: FreelancerComponent,
        children: [
          {
            path: 'my-current-jobs-f',
            component: MyCurrentJobsFComponent
          },
          {
            path: 'my-job-feed-f',
            component: MyJobFeedFComponent
          },
          {
            path: 'proposal-f',
            component: ProposalFComponent
          },
          {
            path: 'reports-f',
            component: ReportsFComponent
          },
          {
            path: 'transaction-f',
            component: TransactionFComponent
          },
          {
            path: 'profilef',
            component: ProfileFComponent
          },
          {
            path:'projectcreate',
            component: ProjectcreateComponent
          }
        ]
      },
      {
        path: "client",
        component: ClientComponent,
        children: [        
          {
            path: 'payment-method-c',
            component: PaymentMethodCComponent,
          },
          {
            path: 'transaction-c',
            component: TransactionCComponent
          },
          {
            path: 'talent',
            component: TalentComponent
          },
          {
            path: 'profile',
            component: ProfileCComponent
          },
          {
            path:'jobcreate',
            component: JobcreateComponent
          },
          {
            path:'proposal-c',
            component: ProposalcComponent
          },
          {
            path:'posted-job-c',
            component: PostedJobCComponent
          }
        ]
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'
      }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
