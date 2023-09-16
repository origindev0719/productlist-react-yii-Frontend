import { FormFieldProps } from "../../types"

const FormField = (props: FormFieldProps) => {
  const { label, type, placeholder } = props
  return (
    <div className="flex items-center col-span-1 w-full gap-3">
      <label>{label}</label>
      <input
        className="px-3 py-2 border border-gray-600 rounded-[4px] w-full"
        placeholder={placeholder}
        type={type}
        min="0"
        max=""
        step="0.01"
      />
    </div>
  )
}
export default FormField
