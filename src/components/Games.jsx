
import React from 'react'
import Categories from '../pages/Categories'
import { data } from '../helper/data'



const Games = () => {

const genres = data.map((item)=>item.genre)

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
var unique = genres.filter(onlyUnique);




  return (
    
    <div className=' '>
      <Categories category={unique} genres={genres}/>
    </div>
  )
}

export default Games