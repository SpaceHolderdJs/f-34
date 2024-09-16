import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  helloUser(name: string) {
    console.log(`Hello, ${name}`);
  }
}
