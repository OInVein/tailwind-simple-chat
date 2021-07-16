import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './app';

describe('render App', () => {
  it('WITH ALL E2E PROCESS', async () => {
    const { getByTestId } = render(<App />);
    const testContainer = getByTestId('container');
    expect(testContainer).toBeInTheDocument();

    const testNicknameInput = getByTestId('nicknameInput');
    const value = 'testNickname';
    const event = { target: { value } };
    fireEvent.change(testNicknameInput, event);

    const testSubmitButton = getByTestId('submitButton');
    fireEvent.click(testSubmitButton);

    await waitForElementToBeRemoved(await screen.findByTestId('greetings'), { timeout: 1500 });

    await waitForElementToBeRemoved(await screen.findByTestId('loading'));

    const testEditableArea = await screen.findByTestId('editableArea');
    expect(testEditableArea).toBeInTheDocument();

    const innerText = 'testMessage';
    const onInputevent = { target: { innerText } };
    fireEvent.input(testEditableArea, onInputevent);

    const onKeyDownEvent = { keyCode: 13 };
    fireEvent.keyDown(testEditableArea, onKeyDownEvent);

    await screen.findByText('testMessage');
  });
});
