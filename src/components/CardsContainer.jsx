import { Container, Grid, makeStyles } from '@material-ui/core'
import CustomCard from './CustomCard'

const useStyles = makeStyles(theme=>({
    cardGrid: {
        padding: '20px 0'
    }
}))

const CardsContainer = ({spacing=4,cardContents}) => {
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={spacing}>
                {cardContents.map(cardContent=>(
                    <CustomCard 
                        image={cardContent.image} 
                        title={cardContent.title} 
                        description={cardContent.description}
                        liveLink={cardContent.liveLink}
                        gitHubLink={cardContent.gitHubLink}
                />))}
            </Grid>
        </Container>
    )
}

export default CardsContainer
