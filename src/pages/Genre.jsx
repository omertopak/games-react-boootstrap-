import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../helper/data'


const Genre = () => {

    const param = useParams()
    console.log("param=",param);

    const genreGames = data.filter((data)=>data.genre===param.item)
    //console.log(genreGames);

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {genreGames.map((item)=>{return (
            <div className="card m-3" style={{ width: '18rem' , height:"30rem" }}>
                
                <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title " style={{ height: '3rem'}}>{item.title}</h5>
                    <div className='overflow-auto' style={{ height: '10rem'}}>
                        <p className="card-text " >{item.short_description}</p>
                    </div>
                    <a href={item.game_url} style={{ height: '4rem'}} className="btn btn-primary w-100" > Go {item.title}</a>
                </div>
            </div>)  
            })}
            
        </div>
    )
}

export default Genre