import { createRef } from 'react';
import { render } from '@testing-library/react';
import { ChatFormProvider } from '../../contexts';

import { SendMessageForm } from '../';

describe('render SendMessageForm', () => {
  const messageFormRef = createRef();
  const setMessage = jest.fn();
  const onSubmit = jest.fn();

  it('MAIN UI', () => {
    const { getByTestId } = render(
      <ChatFormProvider value={{ message: '', setMessage, onSubmit }}>
        <SendMessageForm ref={messageFormRef} />
      </ChatFormProvider>
    );
    const testSendMessageForm = getByTestId('sendMessageForm');
    expect(testSendMessageForm).toBeInTheDocument();

    const testEditableArea = getByTestId('editableArea');
    expect(testEditableArea).toBeInTheDocument();

    const testSendButton = getByTestId('sendButton');
    expect(testSendButton).toBeInTheDocument();

    const { current: form } = messageFormRef;
    expect(form).toBeInTheDocument();
  });
});
