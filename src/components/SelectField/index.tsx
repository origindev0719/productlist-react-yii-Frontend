import { CLASSES } from "../../constants"
import { SelectProps } from "../../types"
import cx from "clsx"

const SelectField = ({
  label,
  options = [],
  onChange = () => {},
  selectedValue,
}: SelectProps) => (
  <div className={cx(CLASSES.SELECT_CONTAINER)}>
    <label>{label}:</label>
    <select
      className={cx(CLASSES.SELECT)}
      onChange={onChange}
      value={selectedValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option.id} className="uppercase">
          {option.name}
        </option>
      ))}
    </select>
  </div>
)

export default SelectField
