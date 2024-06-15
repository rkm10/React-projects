import { Container, Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Components/Store'

export default function User() {

      let users = useSelector((state) => state.user.users)
      let status = useSelector((state) => state.user.status)
      let error = useSelector((state) => state.user.error)
      console.log(users);

      let dispatch = useDispatch()

      //
      useEffect(
            () => {
                  dispatch(fetchUsers())
            }, [])



      return (
            <>
                  <Box>

                        <Container component={Paper}>
                              <Typography variant='h3' sx={{ textAlign: 'center' }}>User Data using toolkit AsyncThunk</Typography>
                              <TableContainer>

                                    {
                                          status == "loading" && <Typography variant='h5' sx={{ textAlign: 'center' }}>Loading... getting data</Typography> || <Table>
                                                <TableHead>
                                                      <TableRow>
                                                            <TableCell align="right">Id</TableCell>
                                                            <TableCell align="right">Name</TableCell>
                                                            <TableCell align="right">Email</TableCell>
                                                            <TableCell align="right">Phone</TableCell>
                                                      </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                      {users.map((user) => (
                                                            <TableRow key={user.id}>
                                                                  <TableCell align="right">{user.id}</TableCell>
                                                                  <TableCell align="right">{user.name}</TableCell>
                                                                  <TableCell align="right">{user.email}</TableCell>
                                                                  <TableCell align='right'>{user.phone}</TableCell>
                                                            </TableRow>
                                                      )
                                                      )
                                                      }
                                                </TableBody>
                                          </Table>
                                    }
                                    {
                                          status == "failed" && <Typography variant='h5' sx={{ textAlign: 'center' }}>Error: {error}</Typography>
                                    }

                              </TableContainer>
                        </Container>
                  </Box>
            </>
      )
}
