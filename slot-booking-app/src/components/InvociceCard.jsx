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
                <Typography color="text.primary" gutterBottom variant="body1">
                    Room Type
                </Typography>
                <Typography color="text.blue" gutterBottom variant="body2">
                    Date
                </Typography>
            </CardContent>
            <Divider
                sx={{ width: "90%", margin: "auto" }}
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CUSTOMER
                </Typography>
                <Divider
                    sx={{
                        "&::before, &::after": {
                            borderColor: "black",
                        },
                    }}
                >
                    <Typography>Some Text</Typography>
                </Divider>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    COST BREAKDOWN
                </Typography>
                <Divider
                    sx={{ width: "90%", margin: "auto" }}
                />
                <CardContent>
                    <Typography variant="body2">
                        Details along with costasdasdsadsadas safasfas
                    </Typography>
                    <Divider sx={{ margin: "auto", marginTop: "5px", marginBottom: "5px", border: "1px solid black" }} />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Price with gst
                    </Typography>
                </CardContent>
                <CardContent>
                </CardContent>
            </CardContent>
        </Card>
    )
}
