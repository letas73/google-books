import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCurrentBook } from '../store/slices/book'
import { useAppDispatch } from '../store/store'

interface BooksItemProps {
  item: any
}

const BooksItem: FC<BooksItemProps> = ({ item }): React.ReactElement => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickItem = () => {
    dispatch(setCurrentBook(item))
    navigate(`/${item.id}`)
  }

  return (
    <li key={item.id} onClick={handleClickItem} className="books__item">
      <div className="books__header">
        <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt="" className="books__header-img" />
      </div>
      {
        item.volumeInfo.categories && item.volumeInfo.categories.map((category: string, i: number) => (
          <div key={`${category}_${i}`} className="books__category">
            {category}
          </div>
        ))
      }
      <div className="books__title">
        {item.volumeInfo.title}
      </div>
      {
        item.volumeInfo.authors && item.volumeInfo.authors.map((item: string, i: number) => (
          <span key={`${item}_${i}`} className="books__author">
            {item}
          </span>
        ))
      }
    </li>
  )
}

export default BooksItem