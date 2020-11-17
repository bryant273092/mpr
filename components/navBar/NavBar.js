import {
    NavBarContainer,
    NavBarLogo,
    NavBarItems,
    NavBarButton,
    HamburgerIconDiv,
    NavBarItem,
    DropDownItem,
    DropDownItems,
    MobileListContainer,
} from './styled';
import HamburgerIcon from './HamburgerIcon';
import {Image} from '../../components/layout'
import links from '../../data/nav_links.json'
import { useState } from 'react';
export const NavBar = () => {
    //hook to control opening/closing dropdown menu when user clicks on hamburger icon
    const [display, setDisplay] = useState('none');
    const teamLogo =
    'https://dewey.tailorbrands.com/production/brand_version_mockup_image/454/4124798454_435c9479-54c4-456f-b52a-d63f90269f1c.png?cb=1605399423';
    //alternates display property for mobile drop down menu
    const changeDisplay = () => {
        if (display == 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    };
    return (
        <NavBarContainer>
            {/* toggles mobile dropdown list when user clicks on hamburger icon */}
            <HamburgerIconDiv onClick={changeDisplay}>
                <HamburgerIcon />
            </HamburgerIconDiv>
            <MobileListContainer display={display}>
                {links.map((link) => (
                    <DropDownItem key={link.name} href={link.href}>
                        {link.name}
                    </DropDownItem>
                ))}
            </MobileListContainer>
            {/* <NavBarLogo>
                <Image src={teamLogo} />
            </NavBarLogo> */}
            <NavBarItems>
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        <NavBarButton key={link.name} href={link.href}>
                            {link.name}
                        </NavBarButton>
                    </NavBarItem>
                ))}
            </NavBarItems>
        </NavBarContainer>
    );
};
