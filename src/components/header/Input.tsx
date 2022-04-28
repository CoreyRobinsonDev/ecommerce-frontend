import { BsSearch } from 'react-icons/bs';

const Input: React.FC = () => {
  return <span className='input-container'>
    <input type='text' placeholder='Search' />
    <button className='search-btn'><BsSearch></BsSearch></button>
  </span> 
}
export default Input;