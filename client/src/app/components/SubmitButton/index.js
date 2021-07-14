import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SubmitButton = forwardRef(({ status, onSubmit }, ref) => (
  <div>
    <input
      data-testid="submitButton"
      ref={ref}
      disabled={status}
      className="outline-none cursor-pointer w-full p-4 rounded-md text-white bg-orange-400 transition motion-safe:hover:scale-105 sm:motion-safe:hover:scale-102"
      // className={status === 'disabled' ? styles.disabled : ''}
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
