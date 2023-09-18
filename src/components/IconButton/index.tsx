import { ButtonProps } from "../../types"
import cx from "clsx"

const IconButton: React.FC<ButtonProps> = ({
  children,
  className,
  handleClick,
}) => {
  return (
    <button className={cx(className)} onClick={handleClick} aria-label="close">
      {children}
    </button>
  )
}

export default IconButton
