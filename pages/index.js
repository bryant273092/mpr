
import HOC from '../components/hoc'
import Banner from '../components/banner'
import Landing from '../components/landing'
const WrappedComponents = () => {
  return (
    <>
      <Banner />
      <Landing />
    </>
  )
}
export default function Home() {
  
  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>

  )
}
