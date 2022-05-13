import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should render title', () => {
    expect(
      screen.getByText('testing-angular-with-testing-library app is running!')
    ).toBeVisible();
  });
});
