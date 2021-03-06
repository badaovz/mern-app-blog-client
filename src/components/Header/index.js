import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

function Header() {
    const classes = useStyles();
    return (
        <Typography 
            className={classes.container} 
            variant='h4' 
            align='center'
        >
            React Blog
        </Typography>
    )
}

export default Header;
