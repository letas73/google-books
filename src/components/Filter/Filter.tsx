import React, { FC, useState } from 'react'
import { setCategory, setSort } from '../../store/slices/filter'
import { useAppDispatch, useAppSelector } from '../../store/store'
import arrowIcon from './arrowIcon.svg'
import './Filter.scss'

const categories = [
  'all',
  'art',
  'biography',
  'computers',
  'history',
  'medical',
  'poetry'
]

const sorting = [
  'relevance',
  'newest'
]

const Filter: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [openCategory, setOpenCategory] = useState<boolean>(false)
  const { sort, category } = useAppSelector((state) => state.filter)

  const handleClickOnCategories = (e: any) => {
    setOpenCategory(!openCategory)
  }

  const handleClickOnSorting = () => {
    setOpenSort(!openSort)
  }

  const selectCategory = (item: string) => {
    dispatch(setCategory(item))
    setOpenCategory(false)
  }

  const selectSort = (item: string) => {
    dispatch(setSort(item))
    setOpenSort(false)
  }

  return (
    <div className="filter">
      <div className="filter__item">
        <span className="filter__label">
          Categories
        </span>
        <button className="filter__btn" onClick={handleClickOnCategories}>
          <span className="filter__value">
            {category}
          </span>
          <img src={arrowIcon} alt="" className="filter__arrow" />
        </button>
        {
          openCategory && (
            <ul className="filter__list filter__list--category">
              {
                categories.map((item, i) => (
                  <li key={`${item}_${i}`}
                    onClick={() => selectCategory(item)}
                    className={category === item ? "filter__list-item active" : 'filter__list-item'}>
                    {item}
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
      <div className="filter__item">
        <span className="filter__label">
          Sorting by
        </span>
        <button className="filter__btn" onClick={handleClickOnSorting}>
          <span className="filter__value">
            {sort}
          </span>
          <img src={arrowIcon} alt="" className="filter__arrow" />
        </button>
        {
          openSort && (
            <ul className="filter__list">
              {
                sorting.map((item, i) => (
                  <li key={`${item}_${i}`}
                    onClick={() => selectSort(item)}
                    className={sort === item ? "filter__list-item active" : 'filter__list-item'}>
                    {item}
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Filter