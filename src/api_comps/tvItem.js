import React from 'react'

const TvItem = (props) => {
  let item = props.item;
  return (
    <div className='col-md-6'>
      <div className='shadow p-2 overflow-hidden h-100'>
        <img src={item.image} alt={item.name} className="w-25 me-2 float-end" />
        <h2>{item.name}</h2>
        <h2>{item.country}</h2>
        <h2>{item.birth_year}</h2>
        <div>Money: {item.worth} M USD</div>
        <div>Company: {item.source}</div>
      </div>
    </div>
  )
}

export default TvItem