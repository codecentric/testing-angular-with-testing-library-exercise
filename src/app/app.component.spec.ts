import { AppComponent } from './app.component';
import { render, screen, within } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { DoglistComponent } from './components/doglist/doglist.component';
import { DogService } from './services/dog.service';

describe('AppComponent', () => {
  const expectedDoggos: Dog[] = [
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

  beforeEach(async () => {
    await render(AppComponent, {
      declarations: [DoglistComponent],
    });
  });

  it('shows the title Doggo-World', () => {
    let heading = screen.getByRole('heading', { name: 'Doggo-World' });

    expect(heading).toBeVisible();
  });

  it('does not show a dogsay when opening the page', () => {
    expect(screen.getByTestId('dogsays')).toHaveTextContent('');
  });

  it('should list the dogs with an image', () => {
    let listItems = screen.getAllByRole('listitem');

    expectedDoggos.forEach((dog, index) => {
      const item = listItems[index];
      const image = within(item).getByAltText(`Image of ${dog.name}`);
      expect(image).toHaveAttribute('src', dog.imageUrl);
      expect(within(item).getByText(dog.name)).toBeVisible();
    });
  });

  it('should show three buttons, upon clicking on them it shows the bark text', async () => {
    let buttons = screen.getAllByRole('button', { name: /bark/i });

    await userEvent.click(buttons[0]);
    screen.getByText('Fido says "wooof!"');

    await userEvent.click(buttons[1]);
    screen.getByText('Buck says "growl!"');

    await userEvent.click(buttons[2]);
    screen.getByText('Bobo says "aroof!"');
  });
});
