import { BsCart4 } from 'react-icons/bs';
import Input from "./Input";
import Nav from "./Nav";
import './header.css';

const Header: React.FC = () => {
  return <>
    <header className="header-container">
      <h1 className='logo' title='Artisan'>Artisan</h1>
      <Input />
      <button className='sign-in-btn' title='Sign in'>Sign in</button>
      <button className='cart-btn'><BsCart4></BsCart4></button>  
    </header>
    <nav>
     <Nav />
    </nav>
  </>
}
export default Header;