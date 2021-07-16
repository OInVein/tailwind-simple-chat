import { createRef } from 'react';
import { format } from 'date-fns';
import { render } from '@testing-library/react';
import { DIALOG_MESSAGE } from '../../constants';

import { Dialog } from '../';

describe('render Dialog', () => {
  const dialogRef = createRef();
  const id = 'testId';

  it('MAIN UI', () => {
    const { getByTestId } = render(<Dialog id={id} ref={dialogRef} allMessages={[]} />);
    const testDialog = getByTestId('dialog');
    expect(testDialog).toBeInTheDocument();

    const {
      current: { main, container },
    } = dialogRef;
    [main, container].forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('DISPLAY MESSAGE', async () => {
    const testUserName = 'testUserName';
    const testText = 'Hello World';
    const { dateComeIn, dateMessaged, dateLeave } = (() => {
      const fakeComeInDate = new Date();
      const fakeMessagedDate = new Date();
      const fakeLeaveDate = new Date();
      fakeMessagedDate.setSeconds(fakeMessagedDate.getSeconds() + 10);
      fakeLeaveDate.setSeconds(fakeLeaveDate.getSeconds() + 20);

      const getISOString = (date = new Date()) => date.toISOString();

      return {
        dateComeIn: getISOString(fakeComeInDate),
        dateMessaged: getISOString(fakeMessagedDate),
        dateLeave: getISOString(fakeLeaveDate),
      };
    })();
    const allMessages = [
      {
        text: '',
        date: dateComeIn,
        isNew: true,
        user: { id: 'testUserId', name: testUserName },
      },
      {
        text: testText,
        date: dateMessaged,
        user: { id: 'testUserId', name: testUserName },
      },
      {
        text: '',
        date: dateLeave,
        isLeaving: true,
        user: { id: 'testUserId', name: testUserName },
      },
    ];

    const { getByTestId } = render(<Dialog id={id} ref={dialogRef} allMessages={allMessages} />);
    const testDialog = getByTestId('dialog');
    const { textContent } = testDialog;
    const { JUST_COME, JUST_LEFT } = DIALOG_MESSAGE;
    const expectComeMessage = `${testUserName} ${JUST_COME}`;
    const expectChatMessage = `${testUserName}(${format(
      new Date(dateMessaged),
      'yyyy/MM/dd HH:mm',
    ).substr(5)})`;
    const expectLeaveMessage = `${testUserName} ${JUST_LEFT}`;
    [expectComeMessage, expectChatMessage, expectLeaveMessage].forEach((perMessage) => {
      expect(textContent).toContain(perMessage);
    });
  });
});
