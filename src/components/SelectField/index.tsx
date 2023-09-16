const SelectField = ({
  label,
  options = [],
}: {
  label: string
  options: string[]
}) => (
  <div className="flex items-center col-span-1 w-full gap-3">
    <label>{label}:</label>
    <select className="px-3 py-2 border border-gray-600 rounded-[4px] w-full">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  </div>
)

export default SelectField
