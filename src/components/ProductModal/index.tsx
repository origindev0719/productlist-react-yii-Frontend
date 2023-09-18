import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import { RootState } from "../../store"
import { fetchStatus } from "../../features/ProductSlice"
import Modal from "react-modal"
import { ProductModalProps, EditProductData } from "../../types"
import { CUSTOM_MODAL_STYLES } from "../../styles"
import { CLASSES } from "../../constants"
import Button from "../Button"
import FormField from "../FormField"
import SelectField from "../SelectField"
import IconButton from "../IconButton"
import { FaTimes } from "react-icons/fa"
import cx from "clsx"

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  title,
  onRequestClose,
  handleSaveClick,
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>()
  const products = useSelector((state: RootState) => state.status)
  const editProducts = useSelector(
    (state: RootState) => state.editData.product
  ) as EditProductData

  let id: number | undefined = 0

  if (products && products[0]) {
    const product: { id: number } = products[0]
    id = product.id
  }

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    count: 0,
    status_id: id || 1,
  })

  const handleChange = (e: { target: { value: string } }, name: string) => {
    setProductData({ ...productData, [name]: e.target.value })
  }

  const handleAddClick = () => {
    handleSaveClick({ ...productData, editId: editProducts.id })
  }

  useEffect(() => {
    if (editProducts) {
      setProductData({
        name: editProducts.name || "",
        price: editProducts.price || 0,
        count: editProducts.count || 0,
        status_id: editProducts.status_id || 1,
      })
    }
  }, [editProducts])

  useEffect(() => {
    dispatch(fetchStatus())
  }, [dispatch])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      style={CUSTOM_MODAL_STYLES}
    >
      <div className={cx(CLASSES.MODAL_ICONBUTTON_CONTAINER)}>
        <h1 className={cx(CLASSES.MODAL_TITLE)}>{`${title} Product`}</h1>
        <IconButton
          handleClick={onRequestClose}
          className={cx(CLASSES.MODAL_ICONBUTTON)}
        >
          <FaTimes size={20} />
        </IconButton>
      </div>
      <div className={cx(CLASSES.MODAL_FORM_CONTAINER)}>
        <FormField
          label="Name:"
          placeholder="TV"
          type="text"
          value={productData.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <FormField
          label="Price:"
          placeholder="0.00"
          type="number"
          min="0"
          step="0.01"
          value={productData.price}
          onChange={(e) => handleChange(e, "price")}
        />
        <SelectField
          label="Status:"
          options={products}
          onChange={(e) => handleChange(e, "status_id")}
          selectedValue={productData.status_id}
        />
        <FormField
          label="Count:"
          placeholder="0"
          type="number"
          min="0"
          max="9999"
          step="1"
          value={productData.count}
          onChange={(e) => handleChange(e, "count")}
        />
      </div>
      <div className={cx(CLASSES.BUTTON_CONTAINER)}>
        <Button
          handleClick={onRequestClose}
          title="Cancel"
          className={cx(CLASSES.MODAL_BUTTON, "bg-gray-600")}
        />
        <Button
          handleClick={handleAddClick}
          title={title}
          className={cx(CLASSES.MODAL_BUTTON, "bg-emerald-700")}
        />
      </div>
    </Modal>
  )
}

export default ProductModal
