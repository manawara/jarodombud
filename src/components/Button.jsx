const Button = ({ type, onAction, children }) => {
  return (
    <button
      type={type}
      onClick={onAction}
      className="group relative overflow-hidden rounded bg-red-color-v1 px-8 py-3 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-red-color-v1 hover:bg-red-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2"
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
      <span className="relative">{children}</span>
    </button>
  )
}

export default Button
