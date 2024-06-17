import { Card, CardContent, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Components/Store'
import axios from 'axios'

export default function Transactions() {

      let users = useSelector((state) => state.user.users)
      let status = useSelector((state) => state.user.status)
      let error = useSelector((state) => state.user.error)

      let dispatch = useDispatch()

      useEffect(() => {
            dispatch(fetchUsers())
      }, [])

      const totalIncome = users.reduce((total, item) => total + (Number(item.amount) > 0 ? Number(item.amount) : 0), 0);
      const totalExpense = users.reduce((total, item) => total + (Number(item.amount) < 0 ? Number(item.amount) : 0), 0);

      return (
            <>
                  <Container sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
                        <Card sx={{ width: "100%", bgcolor: "#c6eb9cc9" }}>
                              <CardContent sx={{ cursor: "pointer" }} onClick={() => handleFilterChange({ target: { value: "Income" } })}>
                                    <Typography>Total Income</Typography>
                                    <Typography>{totalIncome}</Typography>
                              </CardContent>
                        </Card>
                        <Card sx={{ width: "100%", bgcolor: "#e91e1e94" }}>
                              <CardContent sx={{ cursor: "pointer" }} onClick={() => handleFilterChange({ target: { value: "Expense" } })}>
                                    <Typography>Total Expenses</Typography>
                                    <Typography>{totalExpense}</Typography>
                              </CardContent>
                        </Card>
                  </Container>
            </>
      );
}
