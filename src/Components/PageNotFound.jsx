import React from 'react'

const PageNotFound = () => {
  return (
    <div className="h-80 md:h-96 w-full flex flex-col justify-center items-center col-span-3">
      <p className="text-2xl text-secondary font-semibold">
        404 | Page Not Found
      </p>
      <p className="text-xs my-2 text-secondary">
        OOPs! this is not a perfect Route! .
      </p>
    </div>
  )
}

export default PageNotFound