import { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { SubmitButton } from '../';

describe('render SubmitButton', () => {
  const submitButtonTestId = 'submitButton';
  const testRef = createRef();
  const onSubmit = jest.fn();

  it('MAIN UI', () => {
    const { getByTestId } = render(<SubmitButton ref={testRef} status="" onSubmit={onSubmit} />);
    const testSubmitButton = getByTestId(submitButtonTestId);
    expect(testSubmitButton).toBeInTheDocument();
  });

  it('DISABLED STATUS', () => {
    const status = 'disabled';
    const { getByTestId } = render(<SubmitButton ref={testRef} status={status} onSubmit={onSubmit} />);
    const testSubmitButton = getByTestId(submitButtonTestId);
    expect(testSubmitButton).toBeDisabled();
  });

  it('ON_SUBMIT EVENT', () => {
    const { getByTestId } = render(<SubmitButton ref={testRef} status="" onSubmit={onSubmit} />);
    const testSubmitButton = getByTestId(submitButtonTestId);
    const value = 'testValue';
    const event = { target: { value } };
    fireEvent.click(testSubmitButton, event);
    expect(onSubmit).toHaveBeenCalled();
  });
});
