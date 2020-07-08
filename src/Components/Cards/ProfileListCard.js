import React from 'react'
import PropTypes from 'prop-types'
import { 
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    IconButton,
    makeStyles
 } from "@material-ui/core";

import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles(({palette,spacing})=>({
    primary:{
        color:grey[600]
    },
    secondary:{
        fontWeight:600,
        fontSize:spacing(2.4),
        color:grey[700]
        
    },
}))




function ProfileListCard(props) {
    const classes = useStyles();
    const {primaryText,secondaryText,actionIcon,listIcon} = props;
    return (
        <ListItem>
            {
                listIcon?(
                    <ListItemIcon>
                        {listIcon||null}
                    </ListItemIcon>
                ):''
            }
            <ListItemText
                secondaryTypographyProps = {{className:classes.secondary}}
                primaryTypographyProps = {{className:classes.primary}}
                primary={primaryText}
                secondary={secondaryText||''}
            />
            {/* action */}
            {
                actionIcon?(
                    <ListItemSecondaryAction
                    
                    >
                        <IconButton edge="end" aria-label="delete">
                            {actionIcon}
                        </IconButton>
                    </ListItemSecondaryAction>
                ):''
            }
        </ListItem>
    )
}

ProfileListCard.propTypes = {
    primaryText:PropTypes.string,
    secondaryText:PropTypes.string,
    actionIcon:PropTypes.element,
    listIcon:PropTypes.element
}
ProfileListCard.defaultProps = {
    primaryText:"this a primary text section"
}

export default ProfileListCard

