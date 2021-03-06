import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { 
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
 } from '@material-ui/core';
 import EmailIcon from '@material-ui/icons/Email';
 import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
 import WcIcon from '@material-ui/icons/Wc';
 import GroupSharpIcon from '@material-ui/icons/GroupSharp';
 import CallIcon from '@material-ui/icons/Call';
 import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
 import GTranslateIcon from '@material-ui/icons/GTranslate';

import { ProfileCard,ProfileListCard } from "../Cards";
import { ProfileSection } from "../Layouts";








function ProfilePage(props) {
    return (
        <div>
            <Grid container>
                <Grid xs={12} md={3} item>
                    <ProfileCard/>
                </Grid>
                <Grid xs={12} md={9} item>
                    <ProfileSection heading="Personal Infomation">
                        <Grid container>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<CakeRoundedIcon color="secondary"/>}
                                    primaryText="Date of Birth"
                                    secondaryText = {new Date('31-dec-1960').toDateString()}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<WcIcon color="secondary"/>}
                                    primaryText="Marital Status"
                                    secondaryText = {"single"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<GroupSharpIcon color="secondary"/>}
                                    primaryText="Gender"
                                    secondaryText = {"Female"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<EmailIcon color="secondary"/>}
                                    actionIcon={<VerifiedUserIcon color="primary" />}
                                    primaryText="Email Address"
                                    secondaryText = {"aniesstudio8263@gmail.com"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<CallIcon color="secondary"/>}
                                    actionIcon={<VerifiedUserIcon color="primary" />}
                                    primaryText="Phone Number"
                                    secondaryText = {"+2348123456789"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <ProfileListCard
                                    listIcon={<GTranslateIcon color="secondary"/>}
                                    primaryText="Language"
                                    secondaryText = {['English','Yoruba'].join(',')}
                                />
                            </Grid>
                            
                        </Grid>
                    </ProfileSection>

                    {/* Accordion section */}

                    {/* offer not match */}
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="offer-matched"
                    >
                        <Typography variant="h5" >Offer:matched</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>

                    {/* offer not match */}
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="offer not matched"
                        id="offer-not-matched"
                    >
                        <Typography variant="h5" >Offer:not matched</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>

                    {/* offer draft */}
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="offer draft"
                        id="offer-draft"
                    >
                        <Typography variant="h5" >Offer:draft</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    
                </Grid>
                
              
            </Grid>
        </div>
    )
}

// ProfilePage.propTypes = {

// }

export default ProfilePage

