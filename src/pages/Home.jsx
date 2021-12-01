import CardsContainer from '../components/CardsContainer'
import cardContents from '../components/cardContents'

const Home = () => {
    return (
        <div>
            <CardsContainer cardContents={cardContents}></CardsContainer>
        </div>
    )
}

export default Home
