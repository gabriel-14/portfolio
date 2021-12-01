import { Button, Typography, Card, CardContent, CardMedia, CardActions, Containers, makeStyles, Grid} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    }
}))

const CustomCard = ({image,title,description,liveLink,gitHubLink}) => {
    const classes = useStyles()
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardGrid}>
                <CardMedia 
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>{title}</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
                <CardActions>
                    {liveLink && <Button variant="contained" href={liveLink}>
                        Live Link
                    </Button>}
                    {gitHubLink && <Button variant="outlined" href={gitHubLink}>
                        GitHub Link
                    </Button>}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CustomCard
