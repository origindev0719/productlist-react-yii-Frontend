import cx from "clsx"
import { PRODUCT_HEADER_TITLES } from "../../constants"

const GRID_CLASSES =
  "grid grid-cols-12 pb-3 px-6 border-b border-gray-400 text-[1.2rem] text-gray-700"

const ProductHeader = () => {
  return (
    <div className={cx(GRID_CLASSES)}>
      {PRODUCT_HEADER_TITLES.map((item, index) => (
        <div className={cx(item.span)} key={index}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default ProductHeader
