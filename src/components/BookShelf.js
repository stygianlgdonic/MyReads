import React from 'react'
import Book from './Book'

export default class BooksShelf extends React.Component {
  render() {
    const { books, changeShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    );
  }
}