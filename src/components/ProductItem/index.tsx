import { ProductItemProps } from "../../types"
import { FiTrash, FiEdit, FiDollarSign } from "react-icons/fi"

const ProductItem = ({ item }: { item: ProductItemProps }) => {
  return (
    <div className="grid grid-cols-12 items-center pb-3 px-6 w-full p-5 bg-white rounded-md text-[1.1rem] text-gray-600 shadow-md">
      <div className="col-span-1">{item.id}</div>
      <div className="col-span-2">{item.created}</div>
      <div className="col-span-3">{item.name}</div>
      <div className="col-span-2 flex items-center">
        <FiDollarSign size={14} />
        {item.price}
      </div>
      <div className="col-span-1">{item.count}</div>
      <div className="col-span-2">{item.status}</div>
      <div className="col-span-1 flex gap-3">
        <FiEdit size={20} color="green" className="cursor-pointer" />
        <FiTrash size={20} color="red" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default ProductItem
