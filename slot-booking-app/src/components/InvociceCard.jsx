import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

import React from "react";


export default function InvociceCard() {
    return (
        <Card sx={{ minWidth: { xs: "100%", md: "100%", lg: "40%" } }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    SUMMARY
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Room Type
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Date
                </Typography>
            </CardContent>
            <Divider
                sx={{ width: "80%", margin: "auto" }}
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CUSTOMER
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CUSTOMER NAME
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    COST BREAKDOWN
                </Typography>
                <CardContent>
                    Details along with cost
                </CardContent>
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Total Price with gst
                </Typography>
            </CardContent>

        </Card>
    )
}
