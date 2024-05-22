import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { addNewBook, editBook, getBooksById } from '../api/bookApi'
import { useNavigate, useParams } from 'react-router-dom'
export function BookForm() {
    let [ book, setBook ] = useState( {
        name: "",
        category:"",
        image:"",
        noOfPages:"",
        auther: "",
        price:""
    } )
    const { id } = useParams();
    const navigate = useNavigate();



    useEffect( () => {
        if ( id !== 0 ) {
            const fetchData = async () => {
                const response = await getBooksById( id )
                setBook( response.data )
            }
            fetchData()
        }
    }, [] )

    const changeHandler = ( e ) => {
        setBook( {
            ...book,
            [ e.target.name ]: e.target.value
        } )
    }
    const submitHandler = async ( e ) => {
        e.preventDefault()
        try {
            if ( id === 0 ) {

                const response = await addNewBook( book )
                navigate( '/books' )

            } else {

                const response = await editBook( book, id )
                navigate( '/books' )

            }
        } catch ( error ) {
            console.log( error )
        }
    }
    return (
        <div className='container mt-3'>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        placeholder="Enter Book Name"
                        type="text"
                        name="name"
                        value={book.name}
                        onChange={changeHandler}
                    />
                    <Form.Text className="text-muted">
                        We should enter name of book.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Category"
                        name="category"
                        onChange={changeHandler}
                        value={book.category}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file"
                        placeholder="Choose an image"
                        name="image"
                        onChange={changeHandler}
                        value={book.image}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>No Of Pages</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter no of pages"
                        name="noOfPages"
                        onChange={changeHandler}
                        value={book.noOfPages}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Auther</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter auther"
                        name="auther"
                        onChange={changeHandler}
                        value={book.auther}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter price"
                        name="price"
                        onChange={changeHandler}
                        value={book.price}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    {id === 0 ? "Add New Book" : 'Edit Book'}
                </Button>
            </Form>
        </div>
    )
}

