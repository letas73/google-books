import React, { FC } from 'react'
import { useAppSelector } from '../../store/store'
import BooksItem from '../BooksItem'
import './Books.scss'

interface BooksProps {
  items: any
}

const Books: FC<BooksProps> = ({ items }): React.ReactElement | null => {

  if (items.totalItems === 0) {
    return <h1 style={{ textAlign: 'center' }}>Книги c такой категорией не найдены</h1>
  }

  if (!items.items) {
    return null
  }

  return (
    <ul className='books'>
      {
        items.items.map((obj: any) => (
          <BooksItem key={obj.id} item={obj} />
        ))
      }
    </ul>
  )
}

export default Books