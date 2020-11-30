import HOC from '../components/hoc'
import { HeadingOne } from '../components/layout/styled'
import ProductGrid from '../components/productGrid';
import React from 'react'
import EstimateCart from '../components/estimateCart';


const WrappedComponents = () => {
  const [estimateCost, setEstimate] = React.useState(0);
  const [Display, setDisplay] = React.useState('none');
  const [itemCart, setItemCart] = React.useState([])
  return (
    <>
      <HeadingOne>Products</HeadingOne>
      <ProductGrid 
        estimateCost={estimateCost}
        setEstimate={setEstimate}
        setDisplay={setDisplay}
        setItemCart={setItemCart}
        itemCart={itemCart}/>
      <EstimateCart display={Display} estimateCost={estimateCost}></EstimateCart>
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
