  
import React from 'react'
import { ListGroup, ListGroupItem, Badge  } from 'reactstrap'

const STATIC_IMAGES_URL = "http://localhost:8000/static/images/"
class BookDetail extends React.Component {
    
    render(){
        const { bookInfo , cover } = this.props
        
        if(bookInfo.id !== undefined){
            return(
                <ListGroup style={{marginTop : 50}}>
                    <ListGroupItem>
                        <h4><Badge color="info">Title</Badge></h4>
                        {bookInfo.title}
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4><Badge color="info">Description</Badge></h4>
                        {bookInfo.title}
                        {bookInfo.description}
                    </ListGroupItem>
                    <ListGroupItem>
                        <img width="400" src={ STATIC_IMAGES_URL + cover.name} />
                    </ListGroupItem>
                </ListGroup>
            )
        }else{ 
            return null
        }
    }
}


export default BookDetail
