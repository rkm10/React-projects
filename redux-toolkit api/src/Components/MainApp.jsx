import React from 'react'
import User from './User'
import { CardContent, Typography } from '@mui/material'
import Form from './Form'

export default function MainApp() {


      const Card = (
            <CardContent sx={{ bgcolor: "#f5f5f5", width: { xs: "100%", md: "100%", lg: "40%" } }}>
                  <Form />
            </CardContent>
      )
      const Card2 = (
            <CardContent sx={{ bgcolor: "#f5f5f5", width: { xs: "100%", md: "100%", lg: "40%" } }}>
                  <User />
            </CardContent>
      )



      return (
            <>
                  <CardContent > <Typography variant='h3' sx={{ textAlign: "center" }} >EXPENSES TRACKER APP</Typography>
                        <CardContent sx={{
                              textAlign: 'center', display: 'flex', flexDirection: { xs: "column", md: "column", lg: "row" }, justifyContent: 'center', gap: 2, height: { xs: "auto", md: "auto", lg: "80vh" },
                        }}>
                              {Card}
                              {Card2}
                        </CardContent>
                  </CardContent>
            </>
      )
}
