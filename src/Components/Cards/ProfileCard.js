import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Avatar, Grid, Box, Typography,Chip, makeStyles } from '@material-ui/core';

const useStyles=makeStyles(({palette,spacing,breakpoints})=>({
    root:{
        padding:spacing(5,0,0,0),
        [breakpoints.down('sm')]:{
            minHeight:spacing(34)
        },
        [breakpoints.up('sm')]:{
            padding:spacing(5,0,5,0),
        }
    },
    avatar:{
        height:spacing(14),
        width:spacing(14),
        borderRadius:spacing(5)
    },
    chip:{
        margin:spacing(-23,0,0,15),
        height:spacing(3),
        borderRadius:spacing(1)
    }
}))


function ProfileCard(props) {
    const {profilePicture,userName,occupation} = props;
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Box>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Box mr={-10}>
                        <Avatar className={classes.avatar} variant="rounded" src={profilePicture} />
                        <Chip className={classes.chip} label="Basic" variant="outlined" />
                    </Box>
                    <Typography variant="h5" >
                        {userName}
                    </Typography>
                    <Typography>
                        <Typography variant="overline" display="inline">
                            {occupation.join()}
                        </Typography>
                    </Typography>
                </Grid>
            </Box>
            
        </Paper>
    )
}

ProfileCard.propTypes = {
    profilePicture:PropTypes.string,
    userName:PropTypes.string,
    occupation:PropTypes.arrayOf(PropTypes.string),
}


ProfileCard.defaultProps = {
    profilePicture:"/img/gallary/child-865116_1920.jpg",
    userName:"Madeline Waston",
    occupation:["Model","Fashion designer"],
}

export default ProfileCard

