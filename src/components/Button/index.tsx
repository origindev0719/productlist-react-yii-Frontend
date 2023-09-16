import { ButtonProps } from "../../types"
import cx from "clsx"

const Button: React.FC<ButtonProps> = ({ title, className, handleClick }) => {
  return (
    <button className={cx(className)} onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button
