import styled from 'styled-components';
import {FlexColumn, FlexRow } from '../layout';

export const ModalContainer = styled(FlexColumn)`
    width: 100%;
    margin: 0px auto;
`
export const Text = styled.p`
    color: gray;
    font-size: 19px;
    text-align: center;
`
export const Heading = styled.h1`
    color: #09899e;
    text-align: center;
`
export const HeadingThree = styled.h3`
    color: black;
    text-align: center;
`
export const Input = styled.input`
    width: 50%;
    border: none;
    color: #09899e;
    text-align: center;
    font-size: 30px;
`
export const InputDiv = styled(FlexRow)`
    width: 80%;
    margin: 0px auto;
    justify-content: space-between;
`