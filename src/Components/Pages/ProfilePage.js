import React from 'react';
// import PropTypes from 'prop-types';
import { 
    Grid
 } from '@material-ui/core';

// import FolderIcon from '@material-ui/icons/Folder';
// import DeleteIcon from '@material-ui/icons/Delete';

import { ProfileCard,ProfileListCard } from "../Cards";
import { ProfileSection } from "../Layouts";

function ProfilePage(props) {
    return (
        <div>
            <Grid container>
                <Grid xs={12} md={3}>
                    <ProfileCard/>
                </Grid>
                <Grid xs={12} md={9}>
                    <ProfileSection heading="Personal Infomation">
                        <Grid container>
                            <Grid item xs={6} md={4} >
                                <ProfileListCard
                                    primaryText="Date of Birth"
                                    secondaryText = {""}
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <ProfileListCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProfileListCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProfileListCard/>
                            </Grid>
                        </Grid>
                   

                    </ProfileSection>
                </Grid>
              
            </Grid>
        </div>
    )
}

// ProfilePage.propTypes = {

// }

export default ProfilePage

