
import { Link } from 'react-router-dom'
import LOGO from "../book-stack.png"
const Header = () => {



  return (
    <header className='w-screen  bg-gray-100'>
      <div className="flex justify-between px-20 py-3 items-center">
      <Link to='/'><img src={LOGO} alt="Logo" className='w-12'/></Link>
      <div className="flex justify-between gap-10 text-xl font-semibold">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/admin/dashboard'>Sell</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      </div>
    </header>
  )
}

export default Header
 