import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Avatar, Grid, Box, Typography,Chip } from '@material-ui/core';




function ProfileCard(props) {
    const {profilePicture,userName,occupation} = props;
    return (
        <Paper>
            <Box>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Box>
                        <Avatar variant="rounded" src={profilePicture} />
                        <Chip label="Basic" variant="outlined" />
                    </Box>
                    <Typography variant="h4" >
                        {userName}
                    </Typography>
                    <Typography variant="subtitle1" >
                        {
                            occupation.map((value,index,array)=>(
                                <Typography variant="button" display="inline">
                                    {`${value}${!index===array.length-1||','}`}
                                </Typography>
                            ))
                        }
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

