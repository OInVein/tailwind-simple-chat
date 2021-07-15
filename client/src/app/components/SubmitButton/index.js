import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SubmitButton = forwardRef(({ status, onSubmit }, ref) => (
  <div>
    <input
      data-testid="submitButton"
      ref={ref}
      disabled={status}
      className={`
        outline-none cursor-pointer w-full p-4 rounded-lg text-white transition tracking-wider
        ${status === 'disabled' ? 'cursor-not-allowed bg-orange-300' : 'bg-orange-400 motion-safe:hover:scale-105 sm:motion-safe:hover:scale-102'}
      `}
      value="Join"
      type="button"
      onClick={onSubmit}
    />
  </div>
));

SubmitButton.displayName = 'SubmitButton';

SubmitButton.propTypes = {
  status: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
