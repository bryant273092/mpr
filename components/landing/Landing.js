import {LandingSection, LandingItem, HeadingItem, ItemDescription } from './styling';

export const Landing = () => {
    return (
        <LandingSection>
            <LandingItem>
                <HeadingItem>Competitive Prices</HeadingItem>
                <ItemDescription> Our prices are the most competitive and affordable prices in the area. So you won't need to break the bank.  </ItemDescription>
            </LandingItem>
            <LandingItem>
                <HeadingItem>Quality Products</HeadingItem>
                <ItemDescription> We ensure that all of our clients recieve their products in a great and clean condition. </ItemDescription>
            </LandingItem>
            <LandingItem>
                <HeadingItem>Reliable Services</HeadingItem>
                <ItemDescription> We strive to provide the most reliable services to our clients by being on time, and without fail.</ItemDescription>
            </LandingItem>
        </LandingSection>
    )
}