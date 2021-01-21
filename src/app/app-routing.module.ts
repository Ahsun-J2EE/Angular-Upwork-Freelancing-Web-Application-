import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCurrentJobsFComponent } from './my-current-jobs-f/my-current-jobs-f.component';
import { MyJobFeedFComponent } from './my-job-feed-f/my-job-feed-f.component';
import { PaymentMethodCComponent } from './payment-method-c/payment-method-c.component';
import { ProposalFComponent } from './proposal-f/proposal-f.component';
import { ReportsFComponent } from './reports-f/reports-f.component';
import { TransactionCComponent } from './transaction-c/transaction-c.component';
import { TransactionFComponent } from './transaction-f/transaction-f.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';

const routes: Routes = [
  {
    path: 'payment-method-c',
    component: PaymentMethodCComponent
  },
  {
    path: 'transaction-c',
    component: TransactionCComponent
  },
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
    path: 'jobcreate',
    component: JobcreateComponent
  },
  {
    path: 'projectcreate',
    component: ProjectcreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
