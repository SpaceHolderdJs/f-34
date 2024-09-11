import { Pipe, PipeTransform } from '@angular/core';
import { JobService } from '../../services/job/job.service';

@Pipe({
  name: 'jobStatus',
  standalone: true,
  pure: false,
})
export class JobStatusPipe implements PipeTransform {

  constructor(public jobService: JobService) { }

  transform(value: string, ...args: unknown[]): unknown {
    return this.jobService.checkIfJobIsLiked(value) ? "Remove From Liked" : "Like Job"

    // const job = this.jobService.getJobById(value);

    // if (!job) return null;

    // this.jobService.validateJob()

    // return job.job_employment_type === "CONTRACT" ? "Contract Job" : "Default Job"

  }

}
