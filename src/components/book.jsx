import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'
import { deleteBook, getAllBooks } from '../api/bookApi'
export function Book() {
    const { data } = useLoaderData();

    let [ books, setBooks ] = useState( data )
    let [ isError, setIsError ] = useState( false )


    useEffect( () => {
        const fetchData = async () => {

            try {
                const response = await getAllBooks()
                setBooks( response.data )
            } catch ( error ) {
                setIsError( true )
                console.log( error )
            }
        }

        fetchData();


    }, [] )



    const deleteHandler = async ( bookId ) => {
        const response = await deleteBook( bookId )
        console.log( response.data )
        const newList = books.filter( book => book.id != bookId )
        setBooks( [ ...newList ] )

    }
    return (
        <div className=' p-5 text-center'>
            <div className="container"></div>
            <h1 className='text-muted mb-4'>Our Books</h1>

            <div className='d-flex p-3'>
                <Link to='/books/0/edit' >
                    <i className="fs-1 fa-solid fa-plus text-success"></i>
                </Link>
            </div>

            {isError ? <h1 className='alert alert-danger'>Can't load Books</h1> :

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Category</th>
                        <th>Auther</th>
                        <th>No of Pages</th>
                        <th>Image</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books && books.map( book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.category}</td>
                                    <td>{book.auther}</td>
                                    <td>{book.noOfPages}</td>
                                    <td><img  width="100" height="100" src={book.image}/></td>
                                    <td>
                                        <Link to={`/books/${book.id}`}>
                                        <i class="fa-solid fa-eye text-success mx-2"></i>
                                        </Link>
                                        <Link to={`/books/${book.id}/edit`}>
                                        <i class="fa-solid fa-pen-to-square text-warning mx-2"></i>
                                        </Link>
                                        <i onClick={() => deleteHandler( book.id )} className="fa-solid fa-trash-can text-danger mx-2"></i>
                                    </td>
                                </tr>

                            )
                        } )}

                    </tbody>
                </Table>}
        </div>
    )
}
