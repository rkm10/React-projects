import { Container, Table, Typography, TableHead, TableRow, TableCell, TableBody, TableContainer, tableCellClasses } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import Paper from '@mui/material/Paper';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: 18,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));



function Account() {
      let data = useSelector((state) => {
            console.log(state)
            return state;
      }
      )
      return (
            <>
                  <Container sx={{ padding: 5 }}>
                        <Typography variant='h2'>Account Details</Typography>
                        <TableContainer component={Paper}>

                              <Table>
                                    <TableHead>
                                          <TableRow>
                                                <StyledTableCell align="right">Name</StyledTableCell>
                                                <StyledTableCell align="right">Mobile</StyledTableCell>
                                                <StyledTableCell align="right">Balance</StyledTableCell>
                                          </TableRow>
                                    </TableHead>
                                    <TableBody>
                                          <TableRow>
                                                <StyledTableCell align="right">{data.user.fullName}</StyledTableCell>
                                                <StyledTableCell align="right">{data.user.mobile}</StyledTableCell>
                                                <StyledTableCell align="right">{data.user.balance}</StyledTableCell>
                                          </TableRow>
                                    </TableBody>
                              </Table>
                        </TableContainer>

                  </Container>
                  <Container sx={{ padding: 5 }}>
                        <Typography variant='h2'>Transaction Details</Typography>
                        <TableContainer component={Paper}>

                              <Table>

                                    <TableHead>
                                          <TableRow>
                                                <StyledTableCell align="right">Type</StyledTableCell>
                                                <StyledTableCell align="right">Amount</StyledTableCell>
                                                <StyledTableCell align="right">Date</StyledTableCell>
                                          </TableRow>
                                    </TableHead>
                                    <TableBody>

                                          {
                                                data.transaction.map((tr) => (
                                                      <TableRow>
                                                            <StyledTableCell align="right">{tr.type}</StyledTableCell>,
                                                            <StyledTableCell align="right">{tr.amount}</StyledTableCell>,
                                                            <StyledTableCell align="right">{tr.date}</StyledTableCell>,
                                                      </TableRow>
                                                ))}
                                    </TableBody>
                              </Table>
                        </TableContainer>
                  </Container>
            </>
      )
}

export default Account
