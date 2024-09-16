import { Pipe, PipeTransform } from '@angular/core';
import { JobType } from '../../../types/job.type';
import { JobService } from '../../services/job/job.service';

@Pipe({
  name: 'highestJobRate',
  standalone: true,
  pure: false
})
export class HighestJobRatePipe implements PipeTransform {

  constructor(private jobService: JobService) { }

  transform(value: JobType[], jobId: string, ...args: unknown[]): string {
    const highestRateJob = this.jobService.getHighestRateJob(this.jobService.jobs);

    return jobId === highestRateJob?.job_id ? "Highest Rate!" : "";
  }

}
