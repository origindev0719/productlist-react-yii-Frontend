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
  status: string
}

export interface ProductModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children?: React.ReactNode
}

export interface FormFieldProps {
  label: string
  className?: string
  placeholder?: string
  type: string
  min?: string
  max?: string
  step?: string
}
