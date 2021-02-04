import { ProductContainer, ProductHeader, ProductDescription, ProductPrice } from './styled';
import { Image, Button, CenteredDiv } from '../layout'
import React from 'react';
import ReactModal from 'react-modal';
import ItemModal from '../itemModal';

const customStyles = {
    content: {
        justifyContent: "center",
        inset: "",
        alignItems: "center",
        width: '90%',
        maxWidth: '500px',
        height: 'auto',
        margin: "auto",
        marginTop: "15%",
        position: 'relative'
        
      },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .25)',
    }
    
};

export const Product = ({ data, setEstimate, estimateCost, setDisplay, setItemCart, itemCart }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    return (
        <ProductContainer>
            <Image src={data.image}></Image>
            <ProductHeader>{data.name}</ProductHeader>
            <ProductDescription>{data.description}</ProductDescription>
            <ProductPrice>{"$" + data.price}</ProductPrice>
            <CenteredDiv>
                <Button onClick={() => {
                    setDisplay("Flex")
                    setIsOpen(true)
                }}>
                    Add to Cart
                </Button>
            </CenteredDiv>
            <ReactModal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel={"COVID-19 Update"}>
                <ItemModal setItemCart={setItemCart} itemCart={itemCart} setisOpen={setIsOpen}item={data} />

            </ReactModal>



        </ProductContainer>

    )
}