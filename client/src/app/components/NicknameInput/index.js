import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { focusElement } from '../../utils';

const NicknameInput = forwardRef(({ value, onChange }, ref) => {
  useEffect(() => {
    const { current: element } = ref;
    focusElement(element);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <input
        className="rounded-md outline-none p-4 w-full transition text-orange-400 focus:shadow-md"
        data-testid="nicknameInput"
        ref={ref}
        type="text"
        value={value}
        placeholder="Nickname"
        onChange={onChange}
      />
    </div>
  );
});

NicknameInput.displayName = 'NicknameInput';

NicknameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NicknameInput;
