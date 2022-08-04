import React, { useEffect } from 'react'
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from './Posts/posts';
import Form from './Forms/form';
import LoveWorld from "./images/love.jpg"
import useStyles from "./styles"
import { useDispatch } from 'react-redux';
import { getPost} from './actions/postAction';


const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost())
  },[dispatch])
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading}  variant='h2' align='center'>LoveWorld</Typography>
        <img className={classes.image}  src={LoveWorld} alt="Love World"  height="60" />
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App;