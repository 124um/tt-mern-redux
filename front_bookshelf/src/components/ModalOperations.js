import React, {useState} from 'react'
import { Modal, Button, ModalHeader, ModalFooter, ModalBody, Input, Label } from 'reactstrap'
const STATIC_IMAGES_URL = "http://localhost:8000/static/images/"

const ModalOperations = (props) => {
    const { isOpen, toggle, onApply, modalOperationsType , bookInfo, currentCover} = props
    const [book, setBook] = useState({title: "", description: "", cover: ""});

    return (
        <Modal isOpen={isOpen} toggle={() => toggle('modalOperationsVisible')}>
            <ModalHeader toggle={ () => toggle( 'modalOperationsVisible' ) }>
                Book operation - {modalOperationsType}
            </ModalHeader>
            <ModalBody>
                {modalOperationsType == "new" ? showNewBook(setBook) : null}
                {modalOperationsType == "edit" ? showEditBook(bookInfo, currentCover) : null}
                {modalOperationsType == "remove" ? showRemoveBook(bookInfo, currentCover) : null}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => {
                    onApply(modalOperationsType, book)
                }}>
                    {ucFirst(modalOperationsType)}
                </Button>{' '}
                <Button color="secondary" onClick={() => toggle('modalOperationsVisible')}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )

    
}
export default ModalOperations

    
const showNewBook = (setBook) => {
    return(
        <>
            <Label for="Title">Title</Label>
            <Input type="text" name="Title" id="Title" onChange={(event) =>setBook({title: event.target.value})}/>
            <Label for="Description">Description</Label>
            <Input type="textarea" name="Description" id="Description"   onChange={(event) =>setBook({description: event.target.value})} />
            <Label for="cover">Upload cover</Label>
            <Input type="file" name="cover" id="cover" />
        </>
    ) 
}

const showEditBook = (bookInfo, currentCover) => {
    return(
        <>
            <Label for="Title">Title</Label>
            <Input type="text" name="Title" id="Title" defaultValue={bookInfo.title}/>
            <Label for="Description">Description</Label>
            <Input type="textarea" name="Description" id="Description" defaultValue={bookInfo.description}/>
            <Label for="cover">Upload new cover</Label>
            <Input type="file" name="cover" id="cover" />
            <img width="200" style={styleImage} src={ STATIC_IMAGES_URL + currentCover.name} />
        </>
    ) 
}

const showRemoveBook = (bookInfo, currentCover) => {
    return(
        <>
            Remove this book - "{bookInfo.title}" ?
            <img width="200" style={styleImage}  src={ STATIC_IMAGES_URL + currentCover.name} />
        </>
    ) 
}

const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

const styleImage = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 25
}