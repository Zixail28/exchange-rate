import { FC } from 'react'

const PageNotFound: FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-auto flex flex-col items-center">
      <h1 className="text-white text-8xl">Page Not Found</h1>
      <img src="../../../../src/assets/404error.webp" alt="Page Not Found" />
    </div>
  )
}

export default PageNotFound