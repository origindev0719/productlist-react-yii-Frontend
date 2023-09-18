export interface ButtonProps {
  title?: string
  className: string
  children?: React.ReactNode
  handleClick: () => void
}

export interface ProductItemProps {
  id: number
  created: string
  name: string
  price: number
  count: number
  status_id: number
  created_at: string
  status: { id: number; name: string }
}

export interface ProductData {
  name: string
  price: number
  count: number
  status_id: number | undefined
  editId?: number // Define editId here
}

export interface ProductModalProps {
  isOpen: boolean
  title: string
  statusId?: number
  onRequestClose: () => void
  handleSaveClick: (productData: {
    name: string
    price: number
    count: number
    status_id: number
    editId?: number
  }) => void

  children?: React.ReactNode
}

export interface FormFieldProps {
  label: string
  className?: string
  placeholder?: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  min?: string
  max?: string
  step?: string
}

export interface EditProductData {
  name: string
  price: number
  count: number
  status_id: number
  id: number // Add id here
}

export interface SelectProps {
  label: string
  options: { id: string; name: string }[]
  selectedValue: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
