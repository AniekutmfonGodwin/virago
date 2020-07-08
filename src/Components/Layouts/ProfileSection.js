import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box,List } from '@material-ui/core';

function ProfileSection(props) {
    const {heading} = props;
    return (
        <Paper elevation={1}>
            <Box p={2}>
                <Typography variant="h5" gutterBottom>
                    {heading}
                </Typography>
                <Box>
                    <List>
                        {props.children}
                    </List>
                </Box>
            </Box>
        </Paper>
    )
}

ProfileSection.propTypes = {
heading:PropTypes.string
}

ProfileSection.defaultProps = {
    heading:"This a default heading"
}

export default ProfileSection

