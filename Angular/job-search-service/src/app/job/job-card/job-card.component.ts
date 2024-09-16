import { Component, Input } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JobService } from '../../services/job/job.service';
import { RouterLink } from '@angular/router';
import { JobStatusPipe } from '../../pipes/job-status/job-status.pipe';
import { HighestJobRatePipe } from '../../pipes/highest-job-rate/highest-job-rate.pipe';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    JobStatusPipe,
    HighestJobRatePipe,
  ],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input({ required: true }) job?: JobType;

  constructor(public jobService: JobService) { }

  defaultJobImageUrl =
    'https://static.vecteezy.com/system/resources/previews/015/981/122/original/job-posting-icon-design-free-vector.jpg';

  onVisit(url: string) {
    window.open(url);
  }

  getDetailsLink(jobId: string) {
    return `/job-details/${jobId}`;
  }
}
