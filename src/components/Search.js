import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'


export default class Search extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {

    const { books, changeShelf } = this.props;

    let showingBooks
    if (this.state.query) {

      const match = new RegExp(escapeRegExp(this.state.query), 'i')

      BooksAPI.search(this.state.query.trim()).then(
        showingBooks => {
          this.setState({ showingBooks })
        }
      )

    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.showingBooks.map(book => (
              <Book
                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
