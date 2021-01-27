import React from 'react';
import { ListGroupItem , ListGroup, Col, Row } from 'reactstrap';
const STATIC_IMAGES_URL = "http://localhost:8000/static/images/"

const BooksList = ({ bookListData, coversData, onSelect }) => {

    const bookList = (bookListData, onSelect) => {
        return (
                <ListGroup className="overflow-y-hight-96pr">
                    <Row>
                    {bookListData.map(book => {
                        return (
                            <Col key={"Col" + book.id }>
                                <ListGroupItem key={"BookGroupItem" + book.id } color="info"
                                    onClick={() => onSelect(book.id)}
                                >
                                    <Row>
                                        <h5  style={{marginLeft: 10}}>{book.title}</h5>
                                        <img width="20" style={styleImagePreview} src={ STATIC_IMAGES_URL + coversData.find( cover => cover.id == book.coverId ).name} />
                                    </Row>                                        
                                </ListGroupItem>
                            </Col>
                        )
                    })
                    }
                    </Row>
                </ListGroup>
        )
    } 

    if(bookListData.length !== undefined && coversData.length !== undefined){
        return (
            <>
                {bookList( bookListData, onSelect )}
            </>
        );
    }else{
        return null
    }
}

export default BooksList;

const styleImagePreview = {
    display: "block",
    marginLeft: "15%"
}