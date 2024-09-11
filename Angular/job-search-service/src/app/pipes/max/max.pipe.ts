import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max',
  standalone: true
})
export class MaxPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {
    return Math.max.apply(null, value);
  }
}
