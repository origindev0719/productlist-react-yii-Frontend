import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { config } from "../API"
import axios from "axios"

export const fetchAllProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(`${config.apiUrl}tblProduct/index`)
  return response.data
})

export const fetchStatus = createAsyncThunk("status/fetch", async () => {
  const response = await axios.get(`${config.apiUrl}tblProduct/status`)
  return response.data
})

export const storeProduct = createAsyncThunk(
  "products/store",
  async (productData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config.apiUrl}tblProduct/create`,
        productData
      )
      return response.data
    } catch (err) {
      if (axios.isAxiosError(err as any) && (err as any).response) {
        return rejectWithValue((err as any).response.data)
      }
    }
  }
)

export const editProduct = createAsyncThunk(
  "products/store",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${config.apiUrl}tblProduct/edit&id=${id}`
      )
      return response.data
    } catch (err) {
      if (axios.isAxiosError(err as any) && (err as any).response) {
        return rejectWithValue((err as any).response.data)
      }
    }
  }
)

export const updateProduct = createAsyncThunk(
  "products/update",
  async (
    { id, TblProduct }: { id: number; TblProduct: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${config.apiUrl}tblProduct/update&id=${id}`,
        TblProduct
      )
      console.log(TblProduct, "api", response.data)
      return response.data
    } catch (err) {
      if (axios.isAxiosError(err as any) && (err as any).response) {
        return rejectWithValue((err as any).response.data)
      }
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config.apiUrl}tblProduct/delete&id=${id}`
      )
      return response.data
    } catch (err) {
      if (axios.isAxiosError(err as any) && (err as any).response) {
        return rejectWithValue((err as any).response.data)
      }
    }
  }
)

const dataSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    status: [],
    data: [],
    editData: {
      product: {
        name: "",
        price: 0,
        count: 0,
        status_id: 1,
      },
    },
    error: null,
    pending: true,
    completed: true,
    toggle: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false
      })

      .addCase(fetchStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.status = action.payload
      })
      .addCase(fetchStatus.rejected, (state, action) => {
        state.isLoading = false
      })

      .addCase(editProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload) {
          state.editData.product = action.payload
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export default dataSlice.reducer
