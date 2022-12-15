import Card from "@mui/material/Card"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material'

import styles from '../styles/About.module.css'
import Picture from "../images/tj_avatar.jpg"
import Image from "next/image"

interface props {
    name: string;
    img: string;
    description: string;
}


export default function TeamCard() {
    return (
        <>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia 
                    title="Tom"
                >
                    <div style={{ position: "relative", width: "100%", height: 150 }}>
                    <Image 
                        alt="Tom"
                        src={Picture}
                        fill
                        />
                    </div>
                </CardMedia>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="div">
                        Tom
                    </Typography>
                    <Typography variant="body2">
                        With over a decade of experience consulting and managing small businesses, Tom brings the knowledge and insights into how we can help transform your business.
                </Typography>
                </CardContent>
            </Card>
        </>
    )
}