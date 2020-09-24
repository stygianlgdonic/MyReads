import React from 'react'
import ShelfChanger from './ShelfChanger'

export default class Book extends React.Component {
  render() {
    const { book, books, changeShelf } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
            />
            <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
          </div>
          <div className="book-title">{book.title}</div>

          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}