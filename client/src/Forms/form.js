import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles"
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postAction';
function Form() {
  const classes = useStyles()
  const [postData, setPostData] = useState({
    title:"", message:"", tag:"", creator:"", selectedFile:""
  })
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createPost(postData))
    console.log(postData)
  }
  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>c'mon let's talk</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => 
           setPostData({...postData, creator: e.target.value})}></TextField>
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => 
        setPostData({...postData, message: e.target.value})}></TextField>
        <TextField name='tag' variant='outlined' label='Tag' fullWidth value={postData.tag} onChange={(e) => 
        setPostData({...postData, tag: e.target.value})}></TextField>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => 
        setPostData({...postData, title: e.target.value})}></TextField>
      <div className={classes.fileInput}>
        <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
      </div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    
)}

export default Form;