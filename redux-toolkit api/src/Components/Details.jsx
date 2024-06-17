import { Button, CardActions, CardContent, Container, Typography, Card } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Components/Store'
import axios from 'axios'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BorderColor } from '@mui/icons-material'
// import { FilteredDataContext } from './ExpenseHistory';

export default function Details() {

      let users = useSelector((state) => state.user.users)
      let status = useSelector((state) => state.user.status)
      let error = useSelector((state) => state.user.error)

      let dispatch = useDispatch()

      useEffect(() => {
            dispatch(fetchUsers())
      }, [])


      const deleteData = (id) => {
            axios.delete(`http://localhost:4000/Data/${id}`)
                  .then(() => {
                        fetchUsers()
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      };



      return (
            <>

                  {


                        status == "loading" && <Typography variant='h5' sx={{ textAlign: 'center' }}>Loading... getting data</Typography> ||


                        <Container>

                              {
                                    users && users?.map((user) => {
                                          const isIncome = user.amount > 0;
                                          const combinedSx = { bgcolor: `${isIncome ? "green" : "red"}`, height: "60px" };
                                          const combinedClass = { border: `2px solid ${isIncome ? "green" : "red"}`, width: "85%", display: "flex", alignItems: "center", justifyContent: "space-around", borderRadius: "10px", padding: "10px", marginBottom: "10px" };

                                          return (
                                                <Card sx={combinedClass} key={user.id}>
                                                      <CardContent sx={combinedSx}></CardContent>
                                                      <CardContent>
                                                            <Typography>{user.expensedetails}</Typography>
                                                            <Typography>₹ {user.amount}</Typography>
                                                            <Typography>{user.date}, {user.time}</Typography>
                                                      </CardContent>
                                                      <CardActions>
                                                            <Button endIcon={<DeleteForeverIcon />} onClick={() => deleteData(user.id)}></Button>
                                                      </CardActions>
                                                </Card>
                                          )
                                    })
                              }

                        </Container >


                  }
            </>
      );
}
