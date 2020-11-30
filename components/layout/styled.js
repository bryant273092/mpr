import styled from 'styled-components';

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`
export const Container = styled.div`
    margin: 0px auto;
   
`
export const Image = styled.img`
    width: 100%;
    height: 300px;
    padding: 10px;
`
export const HeadingOne = styled.h1`
    color: black;
    text-align: center;
    color: #09899e;
    
`
export const Button = styled.button`    
    background-color: ${(props) => props.color || '#09899e'};
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    width: 90%;
    @media (max-width: 640px) {
        font-size: 15px;
    }

`
export const CenteredDiv = styled(FlexColumn)`
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    width: 100%;
`