import { Component, Input } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JobService } from '../../services/job/job.service';
import { RouterLink } from '@angular/router';
import { JobStatusPipe } from '../../pipes/job-status/job-status.pipe';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, JobStatusPipe],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input({ required: true }) job?: JobType

  constructor(public jobService: JobService) { }

  onVisit(url: string) {
    window.open(url);
  }

  getDetailsLink(jobId: string) {
    return `/job-details/${jobId}`;
  }
}
