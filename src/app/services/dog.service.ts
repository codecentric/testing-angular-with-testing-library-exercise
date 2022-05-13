import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogs: Dog[] = [
    { name: 'Fido', bark: 'wooof' },
    { name: 'Buck', bark: 'growl' },
    { name: 'Bobo', bark: 'aroof' },
  ];

  constructor() {}

  get getDoggos() {
    return this.dogs;
  }
}
