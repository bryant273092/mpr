import { FlexColumn, FlexRow, Image } from '../layout';
import styled from 'styled-components';

export const CartContainer = styled(FlexColumn)`
    width: 100%;
    margin: 0px auto;
`
export const CartHeading = styled.h2`
    color: #09899e;
    text-align: center;
    margin: 0px;
    
`
export const ItemRow = styled(FlexRow)`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
export const CartImage = styled(Image)`
    width: 30%;
    height: auto;
    padding: 2px;
`
export const ItemName = styled.h4`
    margin: 0px;
    padding-top: 10px;

`
export const ItemPrice = styled.p`
    color: gray;
    
`
export const DivisionLine= styled.hr`
    color: #09899e;
    width: 100%;
`
export const TotalText = styled.h4`
    text-align: left;
    margin-left: 10px;
`