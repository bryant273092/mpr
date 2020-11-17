import { FlexRow, FlexColumn } from '../layout'
import styled from 'styled-components'

export const LandingSection = styled(FlexRow)`
    width: 100%;
    height: 300px;
    padding: auto 20px;
    @media (max-width: 640px) {
        flex-direction: column;
    } ;
`
export const LandingItem = styled(FlexColumn)`
    border: solid 1px white;
    color: white;
    margin: auto;
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 20px 25px;
    text-align: center;
`
export const HeadingItem = styled.h3`
    color: black;
`
export const ItemDescription = styled.p`
    color: gray;
    padding: 0px 10%;
    margin: 0px;
`