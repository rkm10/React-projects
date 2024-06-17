import React from 'react'
import Form from './Form'
import Account from './Account'
import { Container } from '@mui/material'
import BasicTable from './basicTable'
import ColumnGroupingTable from './columnGroupingTable'

export default function MainFile() {
      return (
            <>
                  <Container sx={{ marginBottom: 15, padding: 10 }}>
                        <Form />
                        <Account />

                  </Container>

                  {/* <BasicTable />
                  <ColumnGroupingTable /> */}
            </>
      )
}
