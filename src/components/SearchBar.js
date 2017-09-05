import React from 'react'
import $ from 'jquery'; 

const SearchBar = ({getBeer}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    // event.target.firstChild.value
    const beer = document.getElementById("query").value

    getBeer(beer)
  }

  const colorBackground = () => {
  }

  const decolorBackground = () => {
    $('.main-logo-container').css('background', '')
  }

  return (
    <div className="main-logo-container"> 
      <div className="filler-circle"></div>
      <h1 className="main-logo animated fadeInDown" style={{marginTop: 0}}>LUKE'S BEER</h1>
      <form id="search-bar" className="beer-form animated fadeInUp" onSubmit={handleSubmit}>
        <div className="filler-right"></div>
        <div className="filler-left"></div>
        <input id="query" placeholder="Beer or beer not. There is no try."  className="search-bar" onFocus={colorBackground} onBlur={decolorBackground} />
        <input type="submit" value="Search Beer" className="massive ui primary basic button get-low"/>
      </form>
    </div>
  )
}

export default SearchBar
