import React from 'react';
import { connect } from 'react-redux'
// import booksTestData from "../data/books.json"
// import coverTestData from "../data/covers.json"
import { Badge, Row, Button } from 'reactstrap';
import BooksList from "./ShelfComponents/BooksList"
import BookDetail from "./ShelfComponents/BookDetail"
import { 
    fetchBooks, 
    postBook, 
    patchBook, 
    deleteBook, 
    fetchCovers } from "../actions/actions";
import Alert from "../components/Alerts"
import ModalOperations from "../components/ModalOperations"

class BookShelfContainer extends React.Component {

    state = {
        currentBook : {},
        currentCover: {},
        booksData : [],
        coversData: [],
        modalOperationsVisible: false,
        modalOperationsType: "",
        alert: { alertText: "", alertColor: "" },
        alertVisible: false,
        disabledButton: true
    }

    componentDidMount() {
        this.props.fetchBooks()
        this.props.fetchCovers()
    }

    setBook = (currentBookId) => {
        this.setState({
            currentBook : this.props.books.res.find(book => book.id == currentBookId),
        })
    }

    setCover = (coverId) => {
        this.setState({
            currentCover : this.props.covers.res.find(cover => cover.id == coverId)
        })
    }

    postNewBook = (newInfo) => {
        const req = {
            title: newInfo.title,
            description : newInfo.description,
            coverId : 1  // Strubbs
        }      
        this.props.postBook(req)
        this.workWithAlert(
            true,
            "Book added to the shelf - success!",
            "success"
        )
        this.setState({ modalOperationsVisible: false })
    }

    patchBook = (newInfo) => {
        const req = {
            id: this.state.currentBook.id,
            title: newInfo.title == undefined ? this.state.currentBook.title : newInfo.title,
            description : newInfo.description == undefined ? this.state.currentBook.description : newInfo.description,
            coverId : newInfo.coverId == undefined ? this.state.currentBook.coverId : newInfo.coverId
        }
        this.props.patchBook(req) 
        this.workWithAlert(
            true,
            "Book edited to the shelf - success!",
            "success"
        )
        this.setState({ modalOperationsVisible: false })
    }
    
    deleteBook = () => {
        this.props.deleteBook(this.state.currentBook.id)
        this.workWithAlert(
            true,
            "Book deleted to the shelf - success!",
            "success"
        )
        this.setState({ modalOperationsVisible: false })
    }

    handleClick = async (currentBookId) => {
        await this.setBook(currentBookId)
        await this.setCover(this.state.currentBook.coverId)
        if(currentBookId){
            this.setState({ disabledButton: false})
        }
    }

    handleClickButton = (type) => {
        this.setState({
            modalOperationsType: type,
            modalOperationsVisible: true
        })
    }

    submitInModal = (type, newInfo) => {
        switch(type) {
            case "new": this.postNewBook(newInfo)
                break   
            case "edit": this.patchBook(newInfo)
                break  
            case "remove": this.deleteBook()
                break  
        }
    }

    workWithAlert = (alertVisible, alertText, alertColor) => {
        this.setState({
            alertVisible: alertVisible,
            alert: {
                alertText: alertText,
                alertColor: alertColor,
            },
        })
    }

    render(){
        const {currentBook, currentCover, alertVisible, modalOperationsVisible, modalOperationsType, disabledButton, alert} = this.state
        const {books , covers} = this.props
        
        return(
            <>
                <Alert
                    alertVisible={alertVisible}
                    alertText={alert.alertText}
                    alertColor={alert.alertColor}
                    toggle={(id) => this.setState({ [id]: ![id] })}
                />
                <ModalOperations
                    isOpen={modalOperationsVisible}
                    toggle={(id) => this.setState({ [id]: ![id] })}
                    modalOperationsType={modalOperationsType}
                    bookInfo={currentBook}
                    currentCover={currentCover}
                    onApply={this.submitInModal}
                />
                <div style={{margin: 50}}>
                    <Row style={{marginBottom: 50, marginLeft: 0}}>
                        <h1><Badge color="warning">This is books shelf!</Badge></h1>
                        <Button onClick={() => this.handleClickButton("new")} style={styleButton} color="primary" outline >Add New book +</Button>
                        <Button disabled={disabledButton} onClick={() => this.handleClickButton("edit")} style={styleButton} color="primary" outline >Edit book</Button>
                        <Button disabled={disabledButton} onClick={() => this.handleClickButton("remove")} style={styleButton} color="primary" outline >Remove book</Button>
                    </Row>
                    <BooksList bookListData={books.res} coversData={covers.res} onSelect={this.handleClick} />
                    <BookDetail bookInfo={currentBook} cover={currentCover} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        books: state.books,
        covers: state.covers
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        postBook: (data) => dispatch(postBook(data)),
        patchBook: (data) => dispatch(patchBook(data)),
        deleteBook: (id) => dispatch(deleteBook(id)),
        fetchCovers: () => dispatch(fetchCovers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookShelfContainer)

const styleButton = {
    marginLeft: 20, 
    marginTop: 6, 
    height: 45 
}