import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import ProductModal from "../components/ProductModal"
import Header from "../components/Header"
import ProductItem from "../components/ProductItem"
import ProductHeader from "../components/ProductHeader"
import IconButton from "../components/IconButton"
import { FiPlus } from "react-icons/fi"
import { fetchAllProducts, storeProduct } from "../features/ProductSlice"
import { RootState } from "../store"
import { toast } from "react-toastify"
import { NO_DATA, TOAST_TITLE, CLASSES, BUTTON_TITLE } from "../constants"
import cx from "clsx"

const ProductList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>()
  const products = useSelector((state: RootState) => state.data)

  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSaveClick = (productData: any) => {
    dispatch(storeProduct(productData))
      .then(() => {
        dispatch(fetchAllProducts())
        toast.success(TOAST_TITLE.created, { autoClose: 2000 })
      })
      .catch((error) => {
        console.error("Failed to store product:", error)
      })
    setShowModal(false)
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <div className={cx(CLASSES.MAIN_CONTAINER)}>
      <Header />
      <div className="px-5 py-8">
        <div className="flex justify-end px-6">
          <IconButton
            handleClick={handleOpenModal}
            className={cx(CLASSES.ADD_ICONBUTTON)}
          >
            <FiPlus size={26} />
          </IconButton>
          <ProductModal
            title={BUTTON_TITLE.create}
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            handleSaveClick={handleSaveClick}
          ></ProductModal>
        </div>
        <div className="flex flex-col w-full p-6 gap-3">
          {products.length > 0 ? (
            <>
              <ProductHeader />
              {products.map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </>
          ) : (
            <div className={cx(CLASSES.NO_DATA)}>{NO_DATA}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
