import React from 'react'
import { Link } from 'react-router-dom'


const Categories = ({ category, genres }) => {
    // console.log(category);




    return (

        <div className='d-flex flex-wrap justify-content-center '>
            {category.map((item) => {
                return (
                    <div key={item.id} className="card text-center m-3 " style={{ width: '18rem' }}>

                        <div className="card-body">
                            <h5 className="card-title">{item}</h5>
                            <Link to={`/categories/${item}`} className="btn btn-primary">Go {item}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories