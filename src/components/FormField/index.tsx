import { FormFieldProps } from "../../types"
import { CLASSES } from "../../constants"
import cx from "clsx"

const FormField = (props: FormFieldProps) => {
  const { label, type, placeholder, value, onChange, ...restProps } = props
  return (
    <div className={cx(CLASSES.FORMFIELD_CONTAINER)}>
      <label>{label}</label>
      <input
        className={cx(CLASSES.FORMINPUT)}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </div>
  )
}
export default FormField
