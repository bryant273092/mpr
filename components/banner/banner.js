import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <BannerHeader>Magical Party Rentals</BannerHeader>
            <BannerText>Rentals for all your magical events</BannerText>
            <BannerButtonGrid>
                <BannerButton href='/products'>View Products</BannerButton>
                <BannerButton href='/contact'>Place Order</BannerButton>
            </BannerButtonGrid>
        </BannerContainer>
    )
}