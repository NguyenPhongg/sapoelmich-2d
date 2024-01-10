import { NavLink } from 'react-router-dom'

export interface InputProps {
  isPartialHidden: boolean
}
const TheHeader: React.FC<InputProps> = ({ isPartialHidden }) => {
  return (
    <header className="shadow-lg fixed top-0 left-0 w-screen z-50 bg-white">
      <div className="container py-3 sm:py-2 mx-auto flex justify-between items-center">
        <div className="logo-elmich">
          <Link to="/" title="Elmich" className="">
            <img
              src="/images/logo.png"
              className="img-fluid w-auto h-[32px] sm:h-[40px]"
            />
          </Link>
        </div>
        {
          isPartialHidden ? (
            <div className="text-xs sm:text flex justify-center items-center flex-1">
              <NavLink to="/object" className="mr-1 sm:mr-2">
                OEM cá nhân
              </NavLink>{' '}
              &gt;{' '}
              <NavLink to="/object/form" className="mx-1 sm:mx-2">
                Thông tin
              </NavLink>{' '}
              &gt;{' '}
              <NavLink to="/object/checkout" className="ml-1 sm:ml-2">
                Thanh toán
              </NavLink>
            </div>
          ) : (
            <div></div>
          )
        }

      </div>
    </header>
  )
}
export default TheHeader
