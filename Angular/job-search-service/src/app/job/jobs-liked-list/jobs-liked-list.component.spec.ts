import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLikedListComponent } from './jobs-liked-list.component';

describe('JobsLikedListComponent', () => {
  let component: JobsLikedListComponent;
  let fixture: ComponentFixture<JobsLikedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsLikedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsLikedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
