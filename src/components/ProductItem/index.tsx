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
import { TOAST_TITLE, CLASSES, BUTTON_TITLE } from "../../constants"
import { ProductItemProps, ProductData } from "../../types"
import { FiTrash, FiEdit, FiDollarSign } from "react-icons/fi"
import { toast } from "react-toastify"
import cx from "clsx"

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
    <div className={cx(CLASSES.PRODUCTITEM_CONTAINER)}>
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
        className={cx(
          CLASSES.STATUS,
          item.status.name === "done"
            ? "bg-green-500 text-white"
            : item.status.name === "pending"
            ? "bg-yellow-500 text-black"
            : "bg-blue-500 text-white"
        )}
      >
        {item.status.name}
      </div>
      <div className="col-span-1 flex gap-3">
        <button aria-label="edit" onClick={() => handleOpenModal(item.id)}>
          <FiEdit size={20} color="green" className="cursor-pointer" />
        </button>
        <button aria-label="trash" onClick={() => handleDeleteClick(item.id)}>
          <FiTrash size={20} color="red" className="cursor-pointer" />
        </button>
      </div>
      <ProductModal
        title={BUTTON_TITLE.update}
        isOpen={showModal}
        statusId={item.status_id}
        onRequestClose={handleCloseModal}
        handleSaveClick={handleSaveClick}
      ></ProductModal>
    </div>
  )
}

export default ProductItem
