import { useEffect, useState } from "react";
import {BsCartPlusFill} from 'react-icons/bs'

const Image: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setPrice((Math.floor(Math.random() * (5000 - 1000 + 1))+1000) / 100)
  }, [])

  return <button className='img-btn'>
    <button className="add-cart-btn"><BsCartPlusFill></BsCartPlusFill></button>
    <span className='price'>${price}</span>
    <img src='https://i.etsystatic.com/28958853/c/1369/1084/466/1585/il/f5e154/3326563845/il_340x270.3326563845_s3gv.jpg' alt=''/>
  </button>
}
export default Image;