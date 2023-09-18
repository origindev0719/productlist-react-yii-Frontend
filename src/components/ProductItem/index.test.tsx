import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../../features/ProductSlice"
import ProductItem from "."
import { ProductItemProps } from "../../types"

const store = createStore(rootReducer, applyMiddleware(thunk))

describe("ProductItem", () => {
  const mockProduct: ProductItemProps = {
    id: 1,
    created_at: new Date().toString(),
    name: "Test Product",
    price: 100,
    count: 10,
    status_id: 1,
    status: {
      id: 1,
      name: "done",
    },
    created: "Test Created",
  }

  it("renders product details correctly", () => {
    render(
      <Provider store={store}>
        <ProductItem item={mockProduct} />
      </Provider>
    )

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.price.toString())).toBeInTheDocument()
    expect(screen.getByText(mockProduct.count.toString())).toBeInTheDocument()
  })

  it("opens modal on edit button click", async () => {
    render(
      <Provider store={store}>
        <ProductItem item={mockProduct} />
      </Provider>
    )

    fireEvent.click(screen.getByRole("button", { name: /edit/i }))

    const updateButton = await screen.findByText("Update")
    expect(updateButton).toBeInTheDocument()
  })
})
