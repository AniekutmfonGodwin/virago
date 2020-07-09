import React from 'react';
// import PropTypes from 'prop-types';
import { 
    Grid
 } from '@material-ui/core';
 import EmailIcon from '@material-ui/icons/Email';
 import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
 import WcIcon from '@material-ui/icons/Wc';
 import GroupSharpIcon from '@material-ui/icons/GroupSharp';
 import CallIcon from '@material-ui/icons/Call';
 import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
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
                            <Grid item xs={12} md={4} >
                                <ProfileListCard
                                    listIcon={<CakeRoundedIcon/>}
                                    primaryText="Date of Birth"
                                    secondaryText = {new Date('31-dec-1960').toLocaleDateString()}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <ProfileListCard
                                    listIcon={<WcIcon/>}
                                    primaryText="Marital Status"
                                    secondaryText = {"single"}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <ProfileListCard
                                    listIcon={<GroupSharpIcon/>}
                                    primaryText="Gender"
                                    secondaryText = {"Female"}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <ProfileListCard
                                    listIcon={<EmailIcon/>}
                                    actionIcon={<VerifiedUserIcon color="primary" />}
                                    primaryText="Email Address"
                                    secondaryText = {"aniesstudio8263@gmail.com"}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <ProfileListCard
                                    listIcon={<CallIcon/>}
                                    actionIcon={<VerifiedUserIcon color="primary" />}
                                    primaryText="Phone Number"
                                    secondaryText = {"+2348123456789"}
                                />
                            </Grid>
                            
                        </Grid>
                   

                    </ProfileSection>
                </Grid>
                <Grid item>

                </Grid>
              
            </Grid>
        </div>
    )
}

// ProfilePage.propTypes = {

// }

export default ProfilePage

