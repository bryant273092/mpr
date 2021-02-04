
import HOC from '../components/hoc'
import Banner from '../components/banner'
import Landing from '../components/landing'
import ReactModal from 'react-modal';
import CovidModal from '../components/covidModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

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


export default function Home() {
  
  const WrappedComponents = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true)
    return (
      <>
        <Banner />
        <Landing />
        <ReactModal
          isOpen={modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
          contentLabel={"COVID-19 Update"}>
          <a onClick={() => {
            setIsOpen(false)
          }}>
            <FontAwesomeIcon style={{ color: "red", fontSize: "30px" }} icon={faTimesCircle} />
          </a>
          <CovidModal />

        </ReactModal>


      </>
    )
  }
  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>

  )
}
