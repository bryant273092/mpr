import { Text, Heading, HeadingThree, ModalContainer, Input, InputDiv } from './styled';
import { Image, Button, CenteredDiv } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HeadingOne } from '../layout/styled';
import React from 'react';

export const ItemModal = ({ item, setisOpen, itemCart, setItemCart}) => {
    const [itemCount, setItemCount] = React.useState(1)
    console.log(itemCart)
    return (
        <ModalContainer>
            <Heading>Enter Quantity</Heading>
            <Image src={item.image}></Image>
            <HeadingThree>{item.name}</HeadingThree>
            <InputDiv>

                <a onClick={() => {
                    if (+itemCount > 1) {
                        setItemCount(((+itemCount) - 1))
                    }
                    
                }}>
                    <FontAwesomeIcon style={{ padding: "0px", color: "#f54b42", fontSize: "25px" }} icon={faArrowDown} />
                </a>

                <Input type="number" value={itemCount} onChange={(event) => {
                    setItemCount(((event.target.value > 1) ? event.target.value : 1 ))
                }}/>
                <a onClick={ () => {
                    setItemCount(((+itemCount) + 1))
                }}>
                    <FontAwesomeIcon style={{ padding: "0px", color: "#3fab2e", fontSize: "25px" }} icon={faArrowUp} />
                </a>
                
            </InputDiv>
            <CenteredDiv style={{ flexDirection: "column", marginTop: "20px" }}>
                <Button style={{ marginBottom: "10px" }} color="#3fab2e">
                    <a onClick={ () => {
                        item.quantity = itemCount;
                        setItemCart([item].concat(itemCart))
                        setisOpen(false)
                    }}>Add to Cart</a>
                    
                </Button>
                <Button color="#f54b42">
                    <a onClick={() => {
                        setisOpen(false)
                    }}> Cancel</a>
                </Button>

            </CenteredDiv>

        </ModalContainer>
    )
}