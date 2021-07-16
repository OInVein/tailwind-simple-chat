import { render, fireEvent } from '@testing-library/react';
import { ChatFormProvider } from '../../contexts';

import { SendButton } from '../';

describe('render SendButton', () => {
  const onSubmit = jest.fn();

  it('MAIN UI', () => {
    const { getByTestId } = render(
      <ChatFormProvider value={{ onSubmit }}>
        <SendButton />
      </ChatFormProvider>
    );
    const testSendButton = getByTestId('sendButton');
    expect(testSendButton).toBeInTheDocument();
  });

  it('ON_SUBMIT EVENT', () => {
    const { getByTestId } = render(
      <ChatFormProvider value={{ onSubmit }}>
        <SendButton />
      </ChatFormProvider>
    );
    const testSendButton = getByTestId('sendButton');
    fireEvent.click(testSendButton);

    expect(onSubmit).toHaveBeenCalled();
  });
});