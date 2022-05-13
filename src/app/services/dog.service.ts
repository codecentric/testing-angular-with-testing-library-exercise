import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogs: Dog[] = [
    {
      name: 'Fido',
      bark: 'wooof',
      imageUrl:
        'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_4127.jpg',
    },
    {
      name: 'Buck',
      bark: 'growl',
      imageUrl: 'https://images.dog.ceo/breeds/appenzeller/n02107908_2134.jpg',
    },
    {
      name: 'Bobo',
      bark: 'aroof',
      imageUrl: 'https://images.dog.ceo/breeds/shihtzu/n02086240_4751.jpg',
    },
  ];

  constructor() {}

  get getDoggos() {
    return this.dogs;
  }

  add(newDog: Dog) {
    this.dogs = [...this.dogs, newDog];
  }
}
