import { PRODUCT_HEADER_TITLES, CLASSES } from "../../constants"
import cx from "clsx"

const ProductHeader = () => {
  return (
    <div className={cx(CLASSES.GRID_CONTAINER)}>
      {PRODUCT_HEADER_TITLES.map((item, index) => (
        <div className={cx(item.span)} key={index}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default ProductHeader
