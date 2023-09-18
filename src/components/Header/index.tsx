import { HEADER_TITLE, CLASSES } from "../../constants"
import cx from "clsx"

const Header = () => {
  return (
    <div className={cx(CLASSES.HEADER_CONTAINER)}>
      <h1 className={cx(CLASSES.HEADER_TITLE)}>{HEADER_TITLE}</h1>
    </div>
  )
}

export default Header
