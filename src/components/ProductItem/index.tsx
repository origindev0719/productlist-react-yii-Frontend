import { useState } from "react"
import { useDispatch } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import {
  editProduct,
  updateProduct,
  fetchAllProducts,
  deleteProduct,
} from "../../features/ProductSlice"
import ProductModal from "../ProductModal"
import { TOAST_TITLE } from "../../constants"
import { ProductItemProps, ProductData } from "../../types"
import { FiTrash, FiEdit, FiDollarSign } from "react-icons/fi"
import { toast } from "react-toastify"
import cx from "clsx"

const classes = {
  container:
    "grid grid-cols-12 items-center pb-3 px-6 w-full p-5 bg-white rounded-md text-[1.1rem] text-gray-600 shadow-md",
  status:
    "col-span-2 uppercase w-3/4 md:w-1/2 text-xs text-center font-bold py-1 px-2 rounded",
}

const ProductItem = ({ item }: { item: ProductItemProps }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>()

  const [showModal, setShowModal] = useState(false)

  const date = new Date(item.created_at)

  const handleOpenModal = (id: number) => {
    dispatch(editProduct(id))
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSaveClick = (productData: ProductData) => {
    if (productData.editId) {
      const updatedProduct = {
        id: productData.editId,
        TblProduct: {
          name: productData.name,
          price: productData.price,
          count: productData.count,
          status_id: productData.status_id,
        },
      }
      dispatch(updateProduct(updatedProduct))
        .then(() => {
          dispatch(fetchAllProducts())
          toast.success(TOAST_TITLE.updated, {
            autoClose: 2000,
          })
        })
        .catch((error) => {
          console.error("Failed to store product:", error)
        })
      setShowModal(false)
    }
  }

  const handleDeleteClick = (id: number) => {
    dispatch(deleteProduct(id))
      .then(() => {
        dispatch(fetchAllProducts())
        toast.error(TOAST_TITLE.deleted, { autoClose: 2000 })
      })
      .catch((error) => {
        console.error("Failed to store product:", error)
      })
  }

  return (
    <div className={cx(classes.container)}>
      <div className="col-span-2 md:col-span-1">{item.id}</div>
      <div className="col-span-2 md:block hidden">
        {date.toLocaleDateString()}
      </div>
      <div className="col-span-3">{item.name}</div>
      <div className="col-span-2 flex items-center">
        <FiDollarSign size={14} />
        {item.price}
      </div>
      <div className="col-span-1">{item.count}</div>
      <div
        className={`${classes.status} ${
          item.status.name === "done"
            ? "bg-green-500 text-white"
            : item.status.name === "pending"
            ? "bg-yellow-500 text-black"
            : "bg-blue-500 text-white"
        }`}
      >
        {item.status.name}
      </div>
      <div className="col-span-1 flex gap-3">
        <FiEdit
          size={20}
          color="green"
          className="cursor-pointer"
          onClick={() => handleOpenModal(item.id)}
        />
        <FiTrash
          size={20}
          color="red"
          className="cursor-pointer"
          onClick={() => handleDeleteClick(item.id)}
        />
      </div>
      <ProductModal
        title="Update"
        isOpen={showModal}
        statusId={item.status_id}
        onRequestClose={handleCloseModal}
        handleSaveClick={handleSaveClick}
      ></ProductModal>
    </div>
  )
}

export default ProductItem
