import { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { NicknameInput } from '../';

describe('render NicknameInput', () => {
  const testRef = createRef();
  const onChange = jest.fn();
  const nickNameInputTestId = 'nicknameInput';

  it('MAIN UI THEN FOCUS ON', () => {
    const { getByTestId } = render(<NicknameInput ref={testRef} value="" onChange={onChange} />);
    const testNicknameInput = getByTestId(nickNameInputTestId);
    expect(testNicknameInput).toBeInTheDocument();

    const { activeElement } = document;
    const isInputFocused = activeElement.isEqualNode(testNicknameInput);
    expect(isInputFocused).toBeTruthy();
  });

  it('ON_CHANGE EVENT', () => {
    const { getByTestId } = render(<NicknameInput ref={testRef} value="" onChange={onChange} />);
    const testNicknameInput = getByTestId(nickNameInputTestId);
    const value = 'testValue';
    const event = { target: { value } };
    fireEvent.change(testNicknameInput, event);
    expect(onChange).toHaveBeenCalled();
  });
});
