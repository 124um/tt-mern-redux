import React from 'react';
import { ListGroupItem , ListGroup, Col, Row } from 'reactstrap';

const BooksList = ({ bookListData, onSelect }) => {

    const bookList = (bookListData, onSelect) => {
        return (
                <ListGroup className="overflow-y-hight-96pr">
                    <Row>
                    {bookListData.map(element => {
                        return (
                            <Col key={"Col" + element.id }>
                                <ListGroupItem key={"BookGroupItem" + element.id } color="info"
                                    onClick={() => onSelect(element.id)}
                                >
                                    <h6>{element.title}</h6>
                                </ListGroupItem>
                            </Col>
                        )
                    })
                    }
                    </Row>
                </ListGroup>
        )
    } 

    if(bookListData.length !== undefined){
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