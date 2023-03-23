import React, { FC, useState } from 'react'
import searchIcon from './searchIcon.png'
import './Header.scss'
import Filter from '../Filter/Filter'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { fetchBooks } from '../../store/slices/books'

const Header: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const { sort, category } = useAppSelector((state) => state.filter)

  const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const handlerSearchBooks = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(fetchBooks({ searchValue, sort, category }))
    }
  }

  const onClickSearchButton = () => {
    dispatch(fetchBooks({ searchValue, sort, category }))
  }

  return (
    <div className='header'>
      <div className="container header__container">
        <h1 className='header__title'>Search for books</h1>
        <div className="header__search">
          <input value={searchValue}
            onChange={onChangeSearchValue}
            onKeyPress={handlerSearchBooks}
            type="search"
            className="header__search-input" />
          <button onClick={onClickSearchButton} className='header__search-button'>
            <img src={searchIcon} alt="" className="header__search-icon" />
          </button>
        </div>
        <Filter />
      </div>
    </div>
  )
}

export default Header