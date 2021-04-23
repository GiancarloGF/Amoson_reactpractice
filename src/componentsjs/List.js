import React from 'react'
import Item from './Item'

import '../css/List.css'

function List(props){
      return (
            <div className='list'>
                  {
                  props.items.map(item=>
                        <Item 
                              key={item.id}
                              id= {item.id} 
                              title={item.title} 
                              rating={item.rating}
                              image={item.image}

                              onUpdateRating={props.onUpdateRating}
                              onRemove={props.onRemove}
                   />)
                  }
            </div>
      )
}

export default List;