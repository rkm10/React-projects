import { Container, Typography, Box, TableContainer, Input, Paper, Card } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Components/Store'
import Details from './Details'
import Transactions from './Transactions'

export default function User() {

      let users = useSelector((state) => state.user.users)
      let status = useSelector((state) => state.user.status)
      let error = useSelector((state) => state.user.error)
      // console.log(users);

      let dispatch = useDispatch()

      //
      useEffect(
            () => {
                  dispatch(fetchUsers())
            }, [])



      return (
            <>
                  <Box>

                        <Container component={Paper} sx={{ padding: "20px" }}>
                              <Typography variant='h3' sx={{ textAlign: 'center' }}></Typography>
                              <Transactions />
                              <TableContainer sx={{ padding: "20px" }}>
                                    <Typography variant='h4' sx={{ textAlign: 'center' }}>Transaction History</Typography>
                                    <Input id="search"
                                          type="text"
                                          name="search"
                                          placeholder="Search for anything...."></Input>
                                    {/* {
                                          status == "loading" && <Typography variant='h5' sx={{ textAlign: 'center' }}>Loading... getting data</Typography> || <Table>
                                                <TableHead>
                                                      <TableRow>
                                                            <TableCell align="right">Id</TableCell>
                                                            <TableCell align="right">expense details</TableCell>
                                                            <TableCell align="right">Amount</TableCell>
                                                            <TableCell align="right">date</TableCell>
                                                      </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                      {users.map((user) => (
                                                            <TableRow key={user.id}>
                                                                  <TableCell align="right">{user.id}</TableCell>
                                                                  <TableCell align="right">{user.expensedetails}</TableCell>
                                                                  <TableCell align="right">{user.amount}</TableCell>
                                                                  <TableCell align="right">{user.date}</TableCell>
                                                            </TableRow>
                                                      )
                                                      )
                                                      }
                                                </TableBody>
                                          </Table>
                                    }
                                    {
                                          status == "failed" && <Typography variant='h5' sx={{ textAlign: 'center' }}>Error: {error}</Typography>
                                    } */}
                                    <Card sx={{ overflowx: "hidden", overflowY: "scroll", height: "50vh" }}>
                                          <Details />
                                    </Card>
                              </TableContainer>
                        </Container>
                  </Box>
            </>
      )
}
