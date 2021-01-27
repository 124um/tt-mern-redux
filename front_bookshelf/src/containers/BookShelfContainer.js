import React from 'react';
import { connect } from 'react-redux'
// import booksTestData from "../data/books.json"
// import coverTestData from "../data/covers.json"
import { Badge } from 'reactstrap';
import BooksList from "./ShelfComponents/BooksList"
import BookDetail from "./ShelfComponents/BookDetail"
import { fetchBooks, fetchCovers } from "../actions/actions";

class BookShelfContainer extends React.Component {

    state = {
        currentBook : {},
        currentCover: {},
        booksData : [],
        coversData: [],
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

    handleClick = async (currentBookId) => {
        console.log("BookShelfContainer ~ handleClick= ~ currentBookId", currentBookId)
        await this.setBook(currentBookId)
        await this.setCover(this.state.currentBook.coverId)
    }

    render(){
        const {currentBook, currentCover} = this.state
        const {books, covers} = this.props
        
        return(
            <div style={{margin: 50}}>
                <h1 style={{marginBottom: 50}}><Badge color="warning">This is books shelf!</Badge></h1>
                <BooksList bookListData={books.res} onSelect={this.handleClick} />
                <BookDetail bookInfo={currentBook} cover={currentCover} />
            </div>
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
        fetchCovers: () => dispatch(fetchCovers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookShelfContainer)
