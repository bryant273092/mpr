import {LandingSection, LandingItem, HeadingItem, ItemDescription, IconDiv } from './styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChair, faTruck} from '@fortawesome/free-solid-svg-icons';

export const Landing = () => {
    return (
        <LandingSection>
            <LandingItem>
                <HeadingItem>Competitive Prices</HeadingItem>
                <ItemDescription> Our prices are the most competitive and affordable prices in the area. No need to break the bank.  </ItemDescription>
                <IconDiv><FontAwesomeIcon icon={faDollarSign} /></IconDiv>
            </LandingItem>
            <LandingItem>
                <HeadingItem>Quality Products</HeadingItem>
                <ItemDescription> We guarantee that all of our clients recieve their products in a clean and excellent condition. </ItemDescription>
                <IconDiv><FontAwesomeIcon icon={faChair} /></IconDiv>
            </LandingItem>
            <LandingItem>
                <HeadingItem>Reliable Services</HeadingItem>
                <ItemDescription> We strive to provide the most reliable services to our clients by being on time, and without fail.</ItemDescription>
                <IconDiv><FontAwesomeIcon icon={faTruck} /></IconDiv>
            </LandingItem>
        </LandingSection>
    )
}