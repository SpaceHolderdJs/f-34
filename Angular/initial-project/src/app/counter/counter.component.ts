import { Component } from '@angular/core';
import { TestServiceService } from '../service/test-service/test-service.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [TestServiceService],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor(public testService: TestServiceService) { }


}
