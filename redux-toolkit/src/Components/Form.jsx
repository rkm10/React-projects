import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { updateMobile, updateName, withdraw, deposit } from '../Components/Store'
import { useDispatch } from 'react-redux'
export default function Form() {

      let dispatch = useDispatch()
      // const [formData, setFormData] = useState({
      //       amount: '',
      //       fullName: '',
      //       mobile: ''
      // });

      // const handleChange = (e) => {
      //       const { name, value } = e.target;
      //       setFormData({ ...formData, [name]: value });
      // };

      const [amount, setAmount] = useState("")
      const [fullName, setFullName] = useState("")
      const [mobile, setMobile] = useState("")


      return (

            <>
                  <Card sx={{ padding: 5, alignItems: 'center', }} >
                        <CardContent>
                              <FormControl>
                                    <InputLabel htmlFor="my-number">Enter Amount</InputLabel>
                                    <Input id="my-number" label="Number" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                              </FormControl>
                              <Button variant='contained' color='success' onClick={() => {
                                    dispatch(withdraw(amount));
                                    setAmount(" ");
                              }}
                              >Withdraw</Button>
                              <Button variant='contained' color='warning'
                                    onClick={() => {
                                          dispatch(deposit(amount));
                                          setAmount(" ");
                                    }}>Deposit</Button>
                        </CardContent>

                        <CardContent>
                              <FormControl>
                                    <InputLabel htmlFor="my-input">Enter Name</InputLabel>
                                    <Input id="my-input" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                              </FormControl>
                              <Button variant='contained' color='secondary' onClick={() => {
                                    dispatch(updateName(fullName));
                                    setFullName(" ");
                              }}>Update</Button>
                        </CardContent>

                        <CardContent>
                              <FormControl>
                                    <InputLabel htmlFor="number">Enter Mobile </InputLabel>
                                    <Input id="number" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                              </FormControl>
                              <Button variant='contained' color='secondary' onClick={() => { dispatch(updateMobile(mobile)); setMobile("") }} >Update</Button>
                        </CardContent>
                  </Card >
            </>
      )
}
