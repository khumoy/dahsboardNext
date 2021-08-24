import { TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core'
import React from 'react'
import { getUsers } from '../api'
import Dashboard from '../containers/Dashboard'

const Users = (props) => {
    console.log(props)
    const { data } = props
    return (
        <Dashboard >
            <div className="container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>username</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(v => (
                            <TableRow key={v.id}>
                                <TableCell>{v.id}</TableCell>
                                <TableCell>{v.username}</TableCell>
                                <TableCell>{v.email}</TableCell>
                                <TableCell>{v.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </Dashboard>
    )
}

export const getServerSideProps = async () => {

    const res = await getUsers();
    return {
        props: { data: res }
    }
}

export default Users
