import { forwardRef } from 'react';
import { EditableArea, SendButton } from '../';

const SendMessageForm = forwardRef((_props, ref) => (
  <form
    ref={ref}
    data-testid="sendMessageForm"
    className="absolute min-h-15 h-auto max-h-36 w-full p-2 sm:p-3 bottom-0 flex items-center"
  >
    <div className="w-full h-full relative flex">
      <EditableArea />
      <SendButton />
    </div>
  </form>
));

SendMessageForm.displayName = 'SendMessageForm';

export default SendMessageForm;
