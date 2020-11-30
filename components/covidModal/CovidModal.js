import { Text, Heading } from './styled'
import { Button, CenteredDiv } from '../layout'

export const CovidModal = () => {
    return (
        <>
            <Heading>COVID-19 Update</Heading>
            <Text>The well-being of our collaborators and customers is our top
            priority, so we are taking all the required precautions to protect us and you!
                Give us a call for any questions or concerns.</Text>
            <CenteredDiv>
                <Button>
                    <a title="Call Magical Party Rentals" href="tel:9512077763">
                        Call Now
                    </a>
                </Button>


            </CenteredDiv>




        </>
    )
}