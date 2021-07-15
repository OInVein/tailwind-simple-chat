import { format } from 'date-fns';

const scrollToBottom = (element) => {
  element.scrollTop = element.scrollHeight - element.clientHeight;
};

const MOBILE_IOS = ['iPad', 'iPhone', 'iPod'];
const MOBILE_OTHERS = ['Android', 'webOS', 'BlackBerry', 'Windows Phone'];

const isIOS = () => {
  const regexDeviceIOS = new RegExp(MOBILE_IOS.join('|'));
  return regexDeviceIOS.test(navigator.userAgent) && !window.MSStream;
};

const isMobile = () => {
  const regexDeviceAll = new RegExp([...MOBILE_IOS, ...MOBILE_OTHERS].join('|'));
  return regexDeviceAll.test(navigator.userAgent);
};

const focusElement = (element) => {
  if (isIOS()) return;

  element.focus();
};

const formatDate = date => format(new Date(date), 'yyyy/MM/dd HH:mm');

export { scrollToBottom, isMobile, focusElement, formatDate };
