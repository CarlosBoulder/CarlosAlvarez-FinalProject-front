interface ButtonProps {
  classname?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | undefined;
  text?: string;
  isDisabled?: boolean;
  actionOnClick?: () => void;
}

const Button = ({
  actionOnClick,
  ariaLabel,
  classname,
  isDisabled,
  text,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={classname}
      aria-label={ariaLabel}
      onClick={actionOnClick}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
