import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job/job.service';
import { JobType } from '../../../types/job.type';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  constructor(public jobService: JobService) { }

  job?: JobType;

  ngOnInit(): void {
    const jobId = window.location.pathname.split('/').at(-1);

    if (jobId) {
      this.job = this.jobService.getJobById(jobId);
    }
  }
}
