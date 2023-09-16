import { HEADER_TITLE } from "../../constants"

const Header = () => {
  return (
    <div className=" sticky top-0 py-5 px-7 bg-[#1b44b4] shadow-sm">
      <h1 className=" text-gray-300 text-2xl font-bold">{HEADER_TITLE}</h1>
    </div>
  )
}

export default Header
