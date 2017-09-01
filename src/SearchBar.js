import React from 'react'

const SearchBar = ({getBeer}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    // event.target.firstChild.value
    const beer = document.getElementById("query").value
    console.log(beer)
    getBeer(beer)
  }

  return (
    <form id="search-bar" className="search-bar" onSubmit={handleSubmit}>
      <input id="query" placeholder="Beer or beer not. There is no try."/>
      <input type="submit" value="Search Beer"/>
    </form>
  )
}

export default SearchBar
