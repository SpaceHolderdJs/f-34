import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
  pure: false,
})
export class UserNamePipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): unknown {
    return name.slice(0, 1).toUpperCase().concat(name.slice(1));
  }

}
