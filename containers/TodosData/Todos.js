import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../redux/action';
import TodosWrapper from './TodosWrapper'

const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])

    const data = useSelector(state => state.todos);

    return (
        <TodosWrapper>
            <div className="container py-3" >
                <h1 className="mb-4">Todo</h1>
                <Table className="table  table-hover ">
                    <TableHead >
                        <TableRow>
                            <TableCell>id</TableCell>
                            {/* <TableCell>userId</TableCell> */}
                            <TableCell>title</TableCell>
                            <TableCell>completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="text-white">
                        {data.map(v => <TableRow>
                            <TableCell>{v.id}</TableCell>
                            {/* <TableCell>{v.userId}</TableCell> */}
                            <TableCell>{v.title}</TableCell>
                            <TableCell>
                                {v.completed &&
                                    <FontAwesomeIcon color="green" icon={faCheckCircle} />
                                    || ""}
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </TodosWrapper>
    )
}

export default Todos
