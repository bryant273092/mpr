import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <BannerHeader>Magical Party Rentals</BannerHeader>
            <BannerText>Rentals for all your magical events</BannerText>
            <BannerButtonGrid>
                <BannerButton><a href="/products">View Products</a></BannerButton>
                <BannerButton ><a href="/products">Place Order</a></BannerButton>
            </BannerButtonGrid>
        </BannerContainer>
    )
}