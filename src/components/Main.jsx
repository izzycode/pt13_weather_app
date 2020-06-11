import React, { Fragment, useState } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

const Main = () => {
  const [userInput, setUserInput] = useState('')

  return(
    <Fragment>
      <SearchForm setUserInput={setUserInput}/>
      {
        userInput && <SearchResults userInput={userInput} />
      }

    </Fragment>
  )
}

export default Main