import React from 'react'

let styles = {
  textAlign: 'center'
}

const SearchForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    props.setUserInput(event.target.query.value)
    event.target.reset()
  }

  return(
    <form style={ styles } onSubmit={handleSubmit}>
      <h1>City Weather Search</h1>
      <label htmlFor="query" aria-label="Search for city"></label>
      <input type="search" name="query" placeholder="E.g.: London" required />
      <div>
        <input type="submit" value="Search"/>
      </div>
    </form>
  )
}

export default SearchForm