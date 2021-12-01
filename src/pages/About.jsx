import { Container, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    pictureContainter: {
        display: 'block',
        margin: 'auto'
    },
    pictureContent: {
        display: 'block',
        margin: '80px auto',
        border: '1px solid gray',
        borderRadius: '100%'
    },
    heading: {
        textAlign: 'center'
    }
}))

const About = () => {
    const classes = useStyles()
    return (
        <>
            <Container className={classes.pictureContainter}>
                <img className={classes.pictureContent} src="https://scontent.fmnl6-1.fna.fbcdn.net/v/t39.30808-6/228948788_4745376222140309_2722343376666467049_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHQD3F80haVRNUNPAIrzSdgQZsCbfDAJWhBmwJt8MAlaOKWGlmAnmFkMd1_-GjbE5CbWptwtrolWywe1HxwAUxx&_nc_ohc=f8VgoWamzOoAX-r4dBd&tn=gLxWOUdYLybE06-Q&_nc_ht=scontent.fmnl6-1.fna&oh=991d48c0b29afe1fa77cca809a290342&oe=61AB69FB" width="20%" alt="" />
            </Container>
            <Container className={classes.heading}>
                <Typography variant="h2" color="textPrimary">
                    Gabriel B. Abiera
                </Typography>
                <Typography variant="h4" color="textSecondary">
                    Web Developer, etc...
                </Typography>
                <p>I am a web developer. I was trained by KodeGo to be one. Here is the list of skills and knowledge I can impart:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS (including SASS and SCSS)</li>
                    <li>JavaScript (including ReactJS, JQuery, and NodeJS)</li>
                    <li>Python (including Tkinter and sqlite3)</li>
                    <li>MySQL</li>
                    <li>C++</li>
                </ul>
                <p>Those are the skills that make me a compentent developer. But other than that, I am so much more. I am also a chess player, I read a lot, and learn very fast. I am good with communication and still...</p>
                <Typography variant="h6" color="textPrimary">
                    A lot more.
                </Typography>
            </Container>
        </>
    )
}

export default About
