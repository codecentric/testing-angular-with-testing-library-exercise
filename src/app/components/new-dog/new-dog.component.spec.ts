import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDogComponent } from './new-dog.component';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { DogService } from '../../services/dog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('NewDogComponent', () => {
  let dogService: DogService;

  const routerMock = {
    navigateByUrl: jest.fn(),
  };

  beforeEach(async () => {
    await render(NewDogComponent, {
      imports: [ReactiveFormsModule],
      providers: [{ provide: Router, useValue: routerMock }],
    });
    dogService = TestBed.inject(DogService);
  });

  const expectedDog: Dog = {
    name: 'Beethoven',
    bark: 'grorororor',
    imageUrl: 'https://someUrl',
  };

  it('should add a new dog by filling out the form', async () => {
    const nameInput = screen.getByLabelText(/name:/i);
    const imgInput = screen.getByLabelText(/imgurl:/i);
    const barkInput = screen.getByLabelText(/bark:/i);

    await userEvent.type(nameInput, expectedDog.name);
    await userEvent.type(imgInput, expectedDog.imageUrl);
    await userEvent.type(barkInput, expectedDog.bark);

    let submitbutton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitbutton);

    expect(dogService.getDoggos).toContainEqual(expectedDog);
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('');
  });
});
