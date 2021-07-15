/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useRef } from 'react';
import { ChatFormContext } from '../../contexts';
import { scrollToBottom, focusElement, isMobile } from '../../utils';

const EditableArea = () => {
  const editableRef = useRef();
  const { message, setMessage, onSubmit } = useContext(ChatFormContext);

  useEffect(() => {
    const { current: element } = editableRef;
    focusElement(element);
  }, []);

  useEffect(() => {
    if (message) return;

    const cleanUpEditableArea = () => {
      editableRef.current.innerHTML = '';
      editableRef.current.innerText = '';
    };

    cleanUpEditableArea();
  }, [message]);

  const onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  const onKeyDown = (e) => {
    const { keyCode, shiftKey } = e;
    if (keyCode !== 13 || shiftKey || isMobile()) return;

    onSubmit(e);
  };

  const onInput = (e) => {
    const {
      target: { innerText },
    } = e;
    setMessage(innerText);

    const { current: element } = editableRef;
    scrollToBottom(element);
  };

  return (
    <div
      className="w-full max-h-28 mr-14 text-orange-400 rounded-lg outline-none p-2 border-2 border-solid border-orange-400 animate-chatBackground overflow-y-auto text-xl transition focus:ring-2 focus:ring-orange-300"
      data-testid="editableArea"
      ref={editableRef}
      onPaste={onPaste}
      onKeyDown={onKeyDown}
      onInput={onInput}
      contentEditable
      suppressContentEditableWarning
    />
  );
};

export default EditableArea;
