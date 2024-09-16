import { Routes } from '@angular/router';
import { JobsListComponent } from './job/jobs-list/jobs-list.component';
import { JobsLikedListComponent } from './job/jobs-liked-list/jobs-liked-list.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';

export const routes: Routes = [
    { path: "", redirectTo: 'jobs', pathMatch: "full" },
    { path: 'jobs', component: JobsListComponent },
    { path: 'liked-jobs', component: JobsLikedListComponent },
    { path: 'job-details/:job-id', component: JobDetailsComponent },
];
