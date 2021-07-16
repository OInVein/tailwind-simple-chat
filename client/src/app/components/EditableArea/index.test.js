import { render, fireEvent } from '@testing-library/react';
import { ChatFormProvider } from '../../contexts';

import { EditableArea } from '../';

describe('render EditableArea', () => {
  const setMessage = jest.fn();
  const onSubmit = jest.fn();

  it('MAIN UI THEN FOCUS ON', () => {
    const { getByTestId } = render(
      <ChatFormProvider value={{ message: '', setMessage, onSubmit }}>
        <EditableArea />
      </ChatFormProvider>
    );
    const testEditableArea = getByTestId('editableArea');
    expect(testEditableArea).toBeInTheDocument();

    const { activeElement } = document;
    const isEditableAreaFocused = activeElement.isEqualNode(testEditableArea);
    expect(isEditableAreaFocused).toBeTruthy();
  });

  it('ON_INPUT ON_KEYDOWN EVENT', () => {
    const { getByTestId } = render(
      <ChatFormProvider value={{ message: '', setMessage, onSubmit }}>
        <EditableArea />
      </ChatFormProvider>
    );
    const testEditableArea = getByTestId('editableArea');
    const innerText = 'testMessage';
    const onInputevent = { target: { innerText } };
    fireEvent.input(testEditableArea, onInputevent);

    const onKeyDownEvent = { keyCode: 13 };
    fireEvent.keyDown(testEditableArea, onKeyDownEvent);
    expect(onSubmit).toHaveBeenCalled();
  });
});