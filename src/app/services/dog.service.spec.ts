import { TestBed } from '@angular/core/testing';

import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogService);
  });

  const expectedDoggos: Dog[] = [
    { name: 'Fido', bark: 'wooof' },
    { name: 'Buck', bark: 'growl' },
    { name: 'Bobo', bark: 'aroof' },
  ];

  it('should give us our dogs', () => {
    expect(service.getDoggos).toEqual(expectedDoggos);
  });
});
