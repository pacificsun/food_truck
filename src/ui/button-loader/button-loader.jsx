import React from 'react';

const ButtonLoader = ({
  className,
  type,
  disabled,
  loading,
  children,
  clicked,
  style,
  ...rest
}) => (
  <button
    style={style}
    className={className}
    disabled={disabled}
    onClick={clicked}
    {...rest}
  >
    {loading ? (
      <React.Fragment>
        <i className="fa fa-spinner fa-spin" style={{ marginRight: '5px' }} />
        <span>Loading..</span>
      </React.Fragment>
    ) : (
      <span>{children}</span>
    )}
  </button>
);

export default ButtonLoader;
