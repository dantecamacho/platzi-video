import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../widgets/Containers/search-container'


const Categories =(props)=>{
    return(
        <div className="Categories">
            <SearchContainer/>
            {
            props.categories.map((item)=>{
                return( 
                    <Category 
                    key={item.id} 
                    {...item}
                    handleOpenModal={props.handleOpenModal}
                    />
                    )
                })
            }
        </div>
    )
}
export default Categories