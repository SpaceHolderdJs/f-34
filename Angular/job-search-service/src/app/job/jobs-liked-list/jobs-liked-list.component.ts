import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job/job.service';
import { JobCardComponent } from "../job-card/job-card.component";

@Component({
  selector: 'app-jobs-liked-list',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './jobs-liked-list.component.html',
  styleUrl: './jobs-liked-list.component.css'
})
export class JobsLikedListComponent implements OnInit {
  constructor(public jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.likedJobs = this.jobService.getLSLikedJobs();
  }
}
