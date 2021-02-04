import { CartContainer, Header, Price, EstimateDiv, ButtonDiv } from './styled'
import { Button } from '../layout'

export const EstimateCart = ({ display, itemCart, setCartIsOpen }) => {
    var estimateTotal = 0;
    itemCart.map((item) => {
        const itemCost = item.price * item.quantity;
        estimateTotal += itemCost;
    })
    return (
        <CartContainer display={display}>
            <EstimateDiv>
                <Header>Estimate Cost:</Header>
                <Price>{"$" + estimateTotal.toFixed(2)}</Price>
            </EstimateDiv>
            <ButtonDiv>
                <a style={{width: "100%", marginLeft: "10px"}}>
                    <Button onClick={ () => {
                        setCartIsOpen(true)
                    }}>View Cart</Button>
                </a>
                <a style={{width: "100%"}}>
                    <Button style={{ backgroundColor: "gold" , color:"black", marginRight:"10px"}}>Check Out</Button>
                </a>
            </ButtonDiv>


        </CartContainer>)
}