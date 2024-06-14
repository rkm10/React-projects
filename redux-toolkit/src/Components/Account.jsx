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
            return state.user;
      }
      )
      return (
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
                                          <StyledTableCell align="right">{data.fullName}</StyledTableCell>
                                          <StyledTableCell align="right">{data.mobile}</StyledTableCell>
                                          <StyledTableCell align="right">{data.balance}</StyledTableCell>
                                    </TableRow>
                              </TableBody>
                        </Table>
                  </TableContainer>

            </Container>
      )
}

export default Account
