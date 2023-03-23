import React, { FC } from 'react'
import { useAppSelector } from '../../store/store'
import './Book.scss'

const Book: FC = (): React.ReactElement | null => {
  const book = useAppSelector((state) => state.book.book)

  if(!book) {
    return null
  }

  return (
    <div className='book'>
      <div className="book__right">
        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="" className="book__img" />
      </div>
      <div className="book__left">
        <div className="book__categories">
          {
            book.volumeInfo.categories.map((cat: string, i: number) => (
              <span key={`${cat}_${i}`} className="book__categories-text">
                {cat} /
              </span>
            ))
          }
        </div>   
        <div className="book__title">
          {book.volumeInfo.title}
        </div>
        <div className="book__authors">
          {
            book.volumeInfo.authors.map((author: string, i: number) => (
              <span key={`${author}_${i}`} className="book__authors-text">
                {author}
              </span>
            ))
          }
        </div>
        <div className="book__descr">
          {book.volumeInfo.description}
        </div>
      </div>
    </div>
  )
}

export default Book