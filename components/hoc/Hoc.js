import Head from 'next/head'
import NavBar from '../navBar';
import { FlexColumn } from '../layout'

export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <FlexColumn >
                <Head>
                    <title>Magical Party Rentals</title>
                </Head>
                <NavBar />
                <Content {...props} /></FlexColumn>

        );
    };

    return WrappedComponent;
}