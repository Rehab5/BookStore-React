import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../pages/style.css'

export function BookCard({book}) {
  return (
    <div className="book">
        <div className="col-sm-4 col-md-3 m-2">
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={book.image} height="250"/>
            <Card.Body>
                <Card.Title className='title'>{book.name}</Card.Title>
                <Card.Text className='body'>
                    Auther: {book.auther} <br />
                    Category: {book.category}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Pages: {book.noOfPages} </ListGroup.Item>
                <ListGroup.Item>Price: ${book.price} </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#" className="btn"><i class="fa-solid fa-cart-shopping"></i> Add to Card</Card.Link>
            </Card.Body>
            </Card>
        </div>
    </div>
  )
}
