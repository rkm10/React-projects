import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";


export default function InvociceCard() {
    return (
        <Card>
            <CardHeader>SUMMARY</CardHeader>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>

        </Card>
    )
}
