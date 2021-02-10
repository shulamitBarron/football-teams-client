import {CircularProgress} from '@material-ui/core';
import React from 'react';
import {Root} from '../styled';

const Progress = () => {
    return (
        <Root>
            <CircularProgress size={75}/>
        </Root>
    );
};

export default Progress;
