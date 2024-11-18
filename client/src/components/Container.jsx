export const Container = (
    { children, className, id }
) => {
  return (
    <div id={id} className={`xl:max-w-[90rem] max-w-[80rem] md:px-10 container mx-auto lg:px-3 px-5 ${className}`}
    >
        {children}
    </div>
  )
}