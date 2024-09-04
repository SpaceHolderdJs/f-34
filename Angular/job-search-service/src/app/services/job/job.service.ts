import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobType } from '../../../types/job.type';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private API_URL = 'https://jsearch.p.rapidapi.com/';
  private API_KEY = '2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326';
  private API_HOST = 'jsearch.p.rapidapi.com';

  private headers = {
    'x-rapidapi-key': this.API_KEY,
    'x-rapidapi-host': this.API_HOST,
  };

  constructor(private httpClient: HttpClient) {
    this.httpClient.options(this.API_URL, {
      headers: {
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': this.API_HOST,
      },
    });

    this.likedJobs = localStorage.getItem('liked-jobs')
      ? JSON.parse(localStorage.getItem('liked-jobs')!)
      : [];
  }

  jobs: JobType[] = [];
  likedJobs: JobType[] = [];

  likeJob(job: JobType) {
    this.likedJobs.push(job);
  }

  dislikeJob(job: JobType) {
    this.likedJobs = this.likedJobs.filter(({ job_id }) => job_id !== job.job_id)
  }

  getJobs(query: string) {
    return this.httpClient
      .get(`${this.API_URL}search?query=${query}`, { headers: this.headers })
      .subscribe((response: any) => {
        this.jobs = response.data;
      });
  }
}
