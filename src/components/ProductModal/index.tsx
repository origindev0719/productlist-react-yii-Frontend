import Modal from "react-modal"
import { ProductModalProps } from "../../types"
import { CUSTOM_MODAL_STYLES } from "../../styles"
import Button from "../Button"
import FormField from "../FormField"
import SelectField from "../SelectField"
import IconButton from "../IconButton"
import { option } from "../../API/mockdata"
import { FaTimes } from "react-icons/fa"

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      style={CUSTOM_MODAL_STYLES}
    >
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <h1 className="text-[1.5rem] font-bold">Add Product</h1>
        <IconButton
          handleClick={onRequestClose}
          className="text-gray-500 p-2 bg-gray-300 rounded-full flex justify-start items-center font-light"
        >
          <FaTimes size={20} />
        </IconButton>
      </div>
      <div className="px-3 pt-8 grid grid-cols-2 gap-12">
        <FormField label="Name:" placeholder="TV" type="text" />
        <FormField
          label="Price:"
          placeholder="0.00"
          type="number"
          min="0"
          step="0.01"
        />
        <SelectField label="Status:" options={option} />
        <FormField
          label="Count:"
          placeholder="0"
          type="number"
          min="0"
          max="9999"
          step="1"
        />
      </div>
      <div className="mt-12 mr-3 flex gap-5 justify-end">
        <Button
          handleClick={onRequestClose}
          title="Cancel"
          className="px-8 py-3 bg-gray-600 rounded-md text-white"
        />
        <Button
          handleClick={onRequestClose}
          title="Add"
          className="px-8 py-3 bg-emerald-700 rounded-md text-white"
        />
      </div>
    </Modal>
  )
}

export default ProductModal
