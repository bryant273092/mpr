import styled from 'styled-components'
import { FlexRow, FlexColumn } from '../layout'

export const CartContainer = styled(FlexColumn)`
    display: ${(props) => props.display || 'none'};
    width: 70%;
    height: 100px;
    margin: 0px auto;
    background-color: #f5f5f5;
    color: black;
    text-align: center;
    position: sticky;
    bottom: 20px;
    border: 2px solid #09899e;
    border-radius: 10px;
    align-items: center;
    
    
    @media (max-width: 640px){
        width: 95%
    }
`
export const Header = styled.h2`
    color: #09899e;
    text-align: center;
    margin: 0px;
    @media (max-width: 640px){
        font-size: 20px;
    }
`
export const Price = styled.h3`
    margin: 5px;
    color: black;
    text-align: center;
    
`
export const EstimateDiv = styled(FlexRow)`
    align-items: center;
    justify-content: space-between;

`
export const ButtonDiv = styled(FlexRow)`
    align-items: center;
    justify-content: space-between;
    width: 100%;

`