import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";


export default function InvociceCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    SUMMARY
                </Typography>
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    SUMMARY
                </Typography>
            </CardContent>

        </Card>
    )
}
