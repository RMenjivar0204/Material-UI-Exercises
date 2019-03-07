import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { muscles } from '../../Store';


const Footer = () => {
    return(
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="all" />
                {muscles.map(group => 
                    <Tab label={group} />
                )}
                
            </Tabs>
        </Paper>
    )
}

export default Footer;