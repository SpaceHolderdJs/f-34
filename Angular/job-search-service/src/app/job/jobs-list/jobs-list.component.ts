import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JobService } from '../../services/job/job.service';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    JobCardComponent,
  ],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css',
})
export class JobsListComponent {
  constructor(public jobsService: JobService) { }

  searchFormGroup = new FormGroup({
    query: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  onSearch() {
    console.log(this.searchFormGroup.value.query,);
    this.jobsService.getJobs(this.searchFormGroup.value.query || '');
  }
}
