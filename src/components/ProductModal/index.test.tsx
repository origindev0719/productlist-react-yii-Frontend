import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../../features/ProductSlice" // import your root reducer
import ProductModal from "."
import Modal from "react-modal"

Modal.setAppElement(document.body)

const store = createStore(rootReducer, applyMiddleware(thunk))

describe("ProductModal", () => {
  const mockHandleSaveClick = jest.fn()
  const mockOnRequestClose = jest.fn()

  const props = {
    isOpen: true,
    title: "Test Title",
    onRequestClose: mockOnRequestClose,
    handleSaveClick: mockHandleSaveClick,
  }

  it("renders modal title correctly", () => {
    render(
      <Provider store={store}>
        <ProductModal {...props} />
      </Provider>
    )

    expect(screen.getByText(`${props.title} Product`)).toBeInTheDocument()
  })

  it("calls onRequestClose when close button is clicked", () => {
    render(
      <Provider store={store}>
        <ProductModal {...props} />
      </Provider>
    )

    fireEvent.click(screen.getByRole("button", { name: /close/i }))

    expect(mockOnRequestClose).toHaveBeenCalled()
  })
})
