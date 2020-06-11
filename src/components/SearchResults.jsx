import React, { useEffect, useState } from 'react'

const SearchResults = props => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${props.userInput}`)
      .then(res => res.json())
      .then(cities => setCities(cities))
      .catch(err => console.log(err))
  }, [props.userInput])

  return(
    <section>
      <h1>Results</h1>
      <ul>
        {
          cities.map(city => <li key={city.id}>{city.name}</li>)
        }
      </ul>
    </section>
  )
}

export default SearchResults