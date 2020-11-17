import HOC from '../components/hoc'
import  ProductList  from '../components/productList'


const WrappedComponents = () => {
  return (
    <>
      <ProductList />
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
