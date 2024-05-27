const Container = ({ classCustom, padding, children }) => {
  return (
    <div
      className={`max-w-[1440px] w-full mx-auto ${padding ? 'px-4' : undefined} ${
        classCustom ? classCustom : undefined
      }`}
    >
      {children}
    </div>
  )
}

export default Container
