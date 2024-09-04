import { Component, Input } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input({ required: true }) job?: JobType
}
