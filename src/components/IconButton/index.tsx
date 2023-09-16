import { ButtonProps } from "../../types"
import cx from "clsx"

const IconButton: React.FC<ButtonProps> = ({
  children,
  className,
  handleClick,
}) => {
  return (
    <button className={cx(className)} onClick={handleClick}>
      {children}
    </button>
  )
}

export default IconButton
