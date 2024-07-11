import { Card, CardContent, Typography, Box, Divider, CardActionArea } from "@mui/material";
import React from "react";

export default function InvoiceCard() {
    return (
        <Card sx={{ minWidth: { xs: "100%", md: "100%", lg: "40%" }, maxWidth: { xs: "100%", md: "100%", lg: "42%" } }}>
            <Box sx={{ p: 2 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        SUMMARY
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography color="text.primary" sx={{ fontWeight: "bold" }} gutterBottom variant="body1">
                        Room Type
                    </Typography>
                    <Typography color="blue" sx={{ fontWeight: "bold" }} gutterBottom variant="body2">
                        Date
                    </Typography>
                </CardContent>
                <Divider sx={{ width: "90%", margin: "auto" }} />
                <CardContent sx={{ minHeight: "100px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "nowrap", position: "relative" }}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            CUSTOMER
                        </Typography>
                        <Box sx={{ flexGrow: 1, mx: 2, borderBottom: "1px solid black", height: "1px" }}></Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Customer Name asfas fa a ghsdfa

                        </Typography>
                    </Box>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        COST BREAKDOWN
                    </Typography>
                    <Divider sx={{ width: "90%", margin: "auto" }} />
                    <Typography variant="body2">
                        Details along with cost asdasdsadsadas safasfas dfaa sadfasfa safdasd sfdad sasd
                    </Typography>
                    <Divider sx={{ margin: "auto", marginTop: "5px", marginBottom: "5px", border: "1px solid black" }} />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Price with GST
                    </Typography>
                </CardContent>
            </Box>


        </Card>
    );
}
