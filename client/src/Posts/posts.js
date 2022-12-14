import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/post'
import useStyles from "./styles"


function Posts() {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts )
  return (
    !posts.length ? <CircularProgress/>:(
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
          {
            posts.map(post => (
              <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post}/>
              </Grid>
          ))
          }

      </Grid>
    )
    
  )
}

export default Posts