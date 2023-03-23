import React, { FC, useState } from 'react'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner/Spinner'
import { useAppSelector } from '../../store/store'
import './Home.scss'

const Home: FC = (): React.ReactElement | null => {
  const { status, error, books } = useAppSelector((state) => state.books)
  const isLoading: boolean = status === 'loading'

  if (error) {
    return <h1 style={{ textAlign: 'center', marginTop: '30px' }}>{error}</h1>
  }

  if (isLoading) {
    return <Spinner />
  }

  if (!books) {
    return null
  }

  return (
    <div className="home">
      <div className="container home__container">
        <div className="home__results">
          Found {books.totalItems} results
        </div>
        <Books items={books} />
        {
          books.items && (
            <button className="home__load-more">
              Load more
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Home