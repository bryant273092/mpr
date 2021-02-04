import HOC from '../components/hoc'
import { HeadingOne } from '../components/layout/styled'
import ProductGrid from '../components/productGrid';
import React from 'react'
import EstimateCart from '../components/estimateCart';
import CartModal from '../components/cartModal';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    justifyContent: "center",
    inset: "",
    alignItems: "center",
    width: '90%',
    maxWidth: '1000px',
    height: 'auto',
    margin: "auto",
    marginTop: "15%",
    position: 'relative'
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  }
};

const WrappedComponents = () => {
  //const [estimateCost, setEstimate] = React.useState(0);
  const [Display, setDisplay] = React.useState('none');
  const [itemCart, setItemCart] = React.useState([]);
  const [cartIsOpen, setCartIsOpen] = React.useState(false)
  return (
    <>
      <HeadingOne>Products</HeadingOne>
      <ProductGrid
        // estimateCost={estimateCost}
        // setEstimate={setEstimate}
        setDisplay={setDisplay}
        setItemCart={setItemCart}
        itemCart={itemCart} />
      <EstimateCart
        display={Display}
        itemCart={itemCart} 
        setCartIsOpen={setCartIsOpen}>
      </EstimateCart>

      <ReactModal
        isOpen={cartIsOpen}
        ariaHideApp={false}
        style={customStyles}>
        
      <CartModal 
        itemCart={itemCart} 
        setItemCart={setItemCart} 
        setCartIsOpen={setCartIsOpen}
        />
      </ReactModal>
    </>
  )
}
export default function Products() {
  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>

  )
}
