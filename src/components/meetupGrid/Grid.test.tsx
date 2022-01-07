import { render } from '@testing-library/react';
import Grid from './Grid';

describe('Grid component', () => {
  it('renders without errors', () => {
    //Smoke test
    render(<Grid searchString="" />);
  });
});
