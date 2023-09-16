import { useState } from "react"
import ProductModal from "../components/ProductModal"
import Header from "../components/Header"
import ProductItem from "../components/ProductItem"
import ProductHeader from "../components/ProductHeader"
import IconButton from "../components/IconButton"
import { FiPlus } from "react-icons/fi"
import { mockdata } from "../API/mockdata"

const ProductList = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Header />
      <div className="px-5 py-8">
        <div className="flex justify-end px-6">
          <IconButton
            handleClick={handleOpenModal}
            className="text-white w-[4rem] h-[4rem] bg-violet-700 shadow-md rounded-full flex justify-center items-center font-light text-center"
          >
            <FiPlus size={26} />
          </IconButton>
          <ProductModal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
          ></ProductModal>
        </div>
        <div className="flex flex-col w-full p-6 gap-3">
          {mockdata.length > 0 ? (
            <>
              <ProductHeader />
              {mockdata.map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </>
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
