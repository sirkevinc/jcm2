// @ts-nocheck 

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';

interface props {
    icon: string;
    title: string;
    content: string;
}


export default function BasicCard({ icon, title, content }: props) {
    const icons = {
        work: <WorkIcon />,
        bank: <AccountBalanceIcon />,
        business: <BusinessIcon />
    }

    const IconComponent = icons[icon] as keyof props;
    return (
    <Card sx={{ width: 215 }}>
      <CardContent>
        {IconComponent}
        <Typography variant="h6" component="div">
            {title}
        </Typography>
        <Typography variant="body2">
            {content}
        </Typography>
      </CardContent>
    </Card>
  );
}