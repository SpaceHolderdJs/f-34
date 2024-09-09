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

  jobs: JobType[] = [
    {
      employer_name: 'Xerox',
      employer_logo: 'https://www.xerox.com/assets/images/logos/xerox.svg',
      employer_website: 'http://www.xerox.com',
      employer_company_type: 'Manufacturing',
      job_publisher: 'Learn4Good',
      job_id: '9gZFCv-muG4AAAAAAAAAAA',
      job_employment_type: 'FULLTIME',
      job_title: 'Junior Full Stack Web Developer',
      job_apply_link:
        'https://www.learn4good.com/jobs/san-antonio/texas/info_technology/2356869602/e/',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.4071,
      job_description:
        'Junior Full Stack Web Developer working on in-house tools using C#, .NET Core, Vue.js, and Kendo.js.',
      job_is_remote: false,
      job_posted_at_timestamp: 1685404800,
      job_posted_at_datetime_utc: '2023-05-30T00:00:00.000Z',
      job_city: 'San Antonio',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.42519,
      job_longitude: -98.49459,
      job_benefits: 'Medical, Dental, Vision, Retirement Plan',
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0',
      job_offer_expiration_datetime_utc: '2023-11-29T00:00:00.000Z',
      job_offer_expiration_timestamp: 1701216000,
      job_required_experience: '3 years in full stack development',
      job_required_skills: 'C#, .NET Core, Vue.js, Kendo.js, NoSQL',
      job_required_education: "Bachelor's in Computer Science or equivalent",
      job_experience_in_place_of_education: false,
      job_min_salary: 60000,
      job_max_salary: 80000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: 'Work-life balance, flexible hours',
      job_job_title: 'Junior Full Stack Developer',
      job_posting_language: 'en',
      job_onet_soc: '15113300',
      job_onet_job_zone: '4',
      job_occupational_categories: 'Information Technology',
      job_naics_code: '334111',
      job_naics_name: 'Electronic Computer Manufacturing',
    },
    {
      employer_name: 'Google',
      employer_logo:
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      employer_website: 'http://www.google.com',
      employer_company_type: 'Technology',
      job_publisher: 'LinkedIn',
      job_id: 'GZFCv-muG9AAAAAAAAAAA',
      job_employment_type: 'FULLTIME',
      job_title: 'Software Engineer',
      job_apply_link:
        'https://careers.google.com/jobs/results/123456789/software-engineer/',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.89,
      job_description:
        'Work on developing and scaling innovative software solutions for Google Cloud.',
      job_is_remote: true,
      job_posted_at_timestamp: 1690000000,
      job_posted_at_datetime_utc: '2023-07-15T00:00:00.000Z',
      job_city: 'Mountain View',
      job_state: 'CA',
      job_country: 'US',
      job_latitude: 37.3861,
      job_longitude: -122.0839,
      job_benefits: 'Health Insurance, Stock Options, 401(k), Wellness Program',
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=software+engineer+in+california&start=0',
      job_offer_expiration_datetime_utc: '2024-01-01T00:00:00.000Z',
      job_offer_expiration_timestamp: 1704067200,
      job_required_experience: '5+ years of experience in software development',
      job_required_skills:
        'Python, Java, C++, Cloud Infrastructure, API development',
      job_required_education:
        "Bachelor's in Computer Science or equivalent experience",
      job_experience_in_place_of_education: true,
      job_min_salary: 120000,
      job_max_salary: 180000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: 'Remote work, collaborative environment',
      job_job_title: 'Software Engineer',
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '5',
      job_occupational_categories: 'Software Development',
      job_naics_code: '541512',
      job_naics_name: 'Computer Systems Design Services',
    },
  ];

  likedJobs: JobType[] = this.getLSLikedJobs() || [];

  checkIfJobIsLiked(jobId: string) {
    return this.likedJobs.find((job) => job.job_id === jobId);
  }

  likeJob(job: JobType) {
    this.likedJobs.push(job);
    this.updateLSLikedJobs(this.likedJobs);
  }

  dislikeJob(job: JobType) {
    this.likedJobs = this.likedJobs.filter(
      ({ job_id }) => job_id !== job.job_id
    );
    this.updateLSLikedJobs(this.likedJobs);
  }

  getLSLikedJobs() {
    return localStorage.getItem('jobs')
      ? JSON.parse(localStorage.getItem('jobs')!)
      : null;
  }

  updateLSLikedJobs(jobs: JobType[]) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }

  getJobById(jobId: string) {
    return this.jobs.find((job) => job.job_id === jobId);
  }

  getJobs(query: string) {
    return;
    return this.httpClient
      .get(`${this.API_URL}search?query=${query}`, { headers: this.headers })
      .subscribe((response: any) => {
        this.jobs = response.data;
      });
  }
}
