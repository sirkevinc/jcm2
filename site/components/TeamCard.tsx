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
                    title="TJ"
                >
                    <div style={{ position: "relative", width: "100%", height: 170 }}>
                    <Image 
                        alt="TJ"
                        src={Picture}
                        fill
                        sizes="cover"
                        />
                    </div>
                </CardMedia>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="div">
                        TJ
                    </Typography>
                    <Typography variant="body2">
                        With over a decade of experience consulting and managing small businesses, TJ brings the knowledge and insights into how we can help transform your business.
                </Typography>
                </CardContent>
            </Card>
        </>
    )
}