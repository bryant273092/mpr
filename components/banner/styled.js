import styled from 'styled-components';
import {FlexColumn, FlexRow} from '../layout'

export const BannerContainer = styled(FlexColumn)`
    width: 100%;
    height: 60vh;
    background-image: url(/mpr-background.webp);
    background-size: cover;
`
export const BannerHeader = styled.h1`
    width: auto;
    color: white;
    margin-top: 7.5%;
    text-align: center;
    border-radius: 20px;
    font-size: 3.2em;
    
    @media (max-width: 640px) {
        font-size: 2em;
        
    } ;
`
export const BannerText = styled(BannerHeader)`
    font-size: 2em;
    margin-top: 0px;
    color: white;
    text-shadow: 1px 1px black;
    @media (max-width: 640px) {
        font-size: 1.2em;
        padding: 0px 5px;
    } ;
    
`
export const BannerButtonGrid = styled(FlexRow)`
    width: 55%;
    margin: auto;
    justify-content: center;
    align-items: center;
    @media (max-width: 640px) {
        flex-direction: column;
        width: 60%
    } ;
`
export const BannerButton = styled.button`
    width: 200px;
    margin: 15px;
    color: #09899e;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    font-weight: bold;
    background-color: white;
    padding: 15px;
    @media (max-width: 500px) {
        font-size: 1em;
    } ;
`