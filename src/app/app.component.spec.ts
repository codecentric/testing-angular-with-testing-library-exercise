import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  const expectedDoggos: Dog[] = [
    { name: 'Fido', bark: 'wooof' },
    { name: 'Buck', bark: 'growl' },
    { name: 'Bobo', bark: 'aroof' },
  ];

  beforeEach(async () => {
    await render(AppComponent);
  });

  it('shows the title Doggo-World', () => {
    let heading = screen.getByRole('heading', { name: 'Doggo-World' });

    expect(heading).toBeVisible();
  });

  it('should list the dogs by name and their bark', () => {
    let listItems = screen.getAllByRole('listitem');

    expectedDoggos.forEach((dog, index) => {
      const item = listItems[index];
      expect(item).toHaveTextContent(`${dog.name} says: "${dog.bark}"`);
    });
  });
});
