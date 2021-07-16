import { render } from '@testing-library/react';

import { Loading } from '../';

it('render Loading', () => {
  const { getByTestId } = render(<Loading />);
  const testLoading = getByTestId('loading');
  expect(testLoading).toBeInTheDocument();
});
