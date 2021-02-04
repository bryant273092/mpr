import styled from "styled-components";
import {FlexColumn} from '../layout';

export const ProductContainer = styled(FlexColumn)`
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    height: auto;
    
`
export const ProductHeader = styled.h2`
    color: black;
    text-align: center;
`
export const ProductDescription = styled.p`
    color: grey;
    text-align: center;
    margin-top: auto;
`
export const ProductPrice = styled.h3`
    color: black;
    text-align: center;
    margin-top: auto;
    
`