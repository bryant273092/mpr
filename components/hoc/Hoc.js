import Head from 'next/head'
import NavBar from '../navBar';


export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <>
                <Head>
                    <title>Magical Party Rentals</title>
                </Head>
                <NavBar />
                <Content {...props} />
            </>
        );
    };

    return WrappedComponent;
}