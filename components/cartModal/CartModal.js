import { CartContainer, CartHeading, ItemRow, CartImage, ItemName, ItemPrice, DivisionLine, TotalText } from "./styled";
import { FlexColumn, FlexRow, Button } from '../layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, InputDiv } from '../itemModal/styled'
import { faArrowUp, faArrowDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


export const CartModal = ({ itemCart, setItemCart, setCartIsOpen }) => {
    const [itemCount, setItemCount] = React.useState(1);
    return (
        <CartContainer >
            <a onClick={() => {
                setCartIsOpen(false)
            }}>
                <FontAwesomeIcon style={{ color: "red", fontSize: "30px" }} icon={faTimesCircle} />
            </a>
            <CartHeading> Shopping Cart</CartHeading>
            <TotalText> {"Subtotal: $" }</TotalText>
            {itemCart.map((item) => (
                <FlexColumn key={item.name}style={{ marginBottom: "60px" }}>
                    <DivisionLine />
                    <FlexColumn>
                        <FlexRow>
                            <CartImage src={item.image} />
                            <FlexColumn>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>{"$" + item.price}</ItemPrice>
                            </FlexColumn>
                        </FlexRow>
                        <FlexRow style={{ justifyContent: "space-between" }}>
                            <InputDiv style={{ alignItems: "center", width: "35%", margin: "0px" }}>

                                <a onClick={() => {
                                    if (+itemCount > 1) {
                                        setItemCount(((+itemCount) - 1))
                                    }

                                }}>
                                    <FontAwesomeIcon style={{ padding: "0px", color: "#f54b42", fontSize: "25px" }} icon={faArrowDown} />
                                </a>

                                <Input type="number" value={itemCount} onChange={(event) => {
                                    setItemCount(((event.target.value > 1) ? event.target.value : 1))
                                }} />
                                <a onClick={() => {
                                    setItemCount(((+itemCount) + 1))
                                }}>
                                    <FontAwesomeIcon style={{ padding: "0px", color: "#3fab2e", fontSize: "25px" }} icon={faArrowUp} />
                                </a>

                            </InputDiv>
                            <FlexRow style={{ justifyContent: "space-between", width: "60%" }}>
                                <Button color="#f54b42">Remove</Button>
                            </FlexRow>
                        </FlexRow>
                    </FlexColumn>

                </FlexColumn>
            ))}

        </CartContainer>
    )
}