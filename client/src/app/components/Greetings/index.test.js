import { render } from '@testing-library/react';

import { Greetings } from '../';

describe('render Greetings', () => {
  it('MAIN UI', () => {
    const { getByTestId } = render(<Greetings />);
    const testLoading = getByTestId('greetings');
    expect(testLoading).toBeInTheDocument();
  });

  it('NAME GREETINGS', async () => {
    const testText = 'test';
    const { getByText } = render(<Greetings text={testText} />);
    const greetings = getByText(`Hello ${testText}`);
    expect(greetings).toBeInTheDocument();
  });
});
