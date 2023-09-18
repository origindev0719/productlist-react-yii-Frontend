export const PRODUCT_HEADER_TITLES = [
  { id: 1, name: "ID", span: 'col-span-2 md:col-span-1' },
  { id: 2, name: "Created", span: 'col-span-2 md:block hidden' },
  { id: 3, name: "Name", span: 'col-span-3' },
  { id: 4, name: "Price", span: 'col-span-2' },
  { id: 5, name: "Count", span: 'col-span-1' },
  { id: 6, name: "Status", span: 'col-span-2' },
  { id: 7, name: "Action", span: 'col-span-1' },
]

export const CREATE_BUTTON = 'Create Button'

export const BUTTON_TITLE = {
  update: 'Update',
  create: 'Create',
  cancel: 'Cancel'
}

export const HEADER_TITLE = 'PRODUCT'

export const NO_DATA = 'No Data'

export const TOAST_TITLE = 
  { deleted: 'Product deleted successfully!', 
    updated: 'Product updated successfully!',
    created: 'Product created successfully!'
  }

export const CLASSES = {
  HEADER_CONTAINER: 'sticky top-0 py-5 px-7 bg-[#1b44b4] shadow-sm',
  HEADER_TITLE: 'text-gray-300 text-2xl font-bold',
  FORMINPUT: 'px-3 py-2 border border-gray-600 rounded-[4px] w-full',
  FORMFIELD_CONTAINER: 'flex items-center col-span-1 w-full gap-3',
  GRID_CONTAINER: "grid grid-cols-12 pb-3 px-6 border-b border-gray-400 text-[1.2rem] text-gray-700",
  PRODUCTITEM_CONTAINER: 'grid grid-cols-12 items-center pb-3 px-6 w-full p-5 bg-white rounded-md text-[1.1rem] text-gray-600 shadow-md',
  STATUS: "col-span-2 uppercase w-3/4 md:w-1/2 text-xs text-center font-bold py-1 px-2 rounded",

  MODAL_TITLE: 'text-xl md:text-2xl lg:text-3xl font-bold',
  BUTTON_CONTAINER: 'mt-12 mr-3 flex gap-5 justify-end',
  MODAL_FORM_CONTAINER:"px-3 pt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12",
  MODAL_ICONBUTTON: "text-gray-500 p-2 bg-gray-300 rounded-full flex justify-start items-center font-light",
  MODAL_ICONBUTTON_CONTAINER: "flex justify-between items-center border-b border-gray-200 pb-5",
  MODAL_BUTTON: "px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-md text-white",

  SELECT: 'px-3 py-2 border border-gray-600 rounded-[4px] w-full uppercase',
  SELECT_CONTAINER: 'flex items-center col-span-1 w-full gap-3',

  MAIN_CONTAINER: "w-full min-h-screen bg-slate-200",
  ADD_ICONBUTTON: "text-white w-[4rem] h-[4rem] bg-violet-700 shadow-md rounded-full flex justify-center items-center font-light text-center",
  NO_DATA: "text-center text-2xl text-gray-600 mt-12",
}