import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job/job.service';
import { JobType } from '../../../types/job.type';
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { OddPipe } from '../../pipes/odd/odd.pipe';
import { MaxPipe } from '../../pipes/max/max.pipe';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    PercentPipe,
    SlicePipe,
    JsonPipe,
    AsyncPipe,
    OddPipe,
    MaxPipe
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  constructor(public jobService: JobService) { }

  job?: JobType;

  jobDate = new Date();

  promise = new Promise((res, rej) => setTimeout(() => rej("Hello from promise"), 2000))

  ngOnInit(): void {
    const jobId = window.location.pathname.split('/').at(-1);

    if (jobId) {
      this.job = this.jobService.getJobById(jobId);
    }
  }
}
