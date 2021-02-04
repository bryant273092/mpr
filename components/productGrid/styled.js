import styled from 'styled-components';
import {FlexRow, FlexColumn} from '../layout'

export const Grid = styled.div`
    display: grid;
    width: 95%;
    max-width: 1600px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 0px auto;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    margin-bottom: 50px;
`