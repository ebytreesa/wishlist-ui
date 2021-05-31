import React from 'react'
import Wish from './Wish'

const WishList = (props) => {

    const renderWishList = ({wishes}) =>{
        if(wishes){
            return wishes.map(wish => {               
                return (
                    <div>
                        <Wish key={wish.id} wish={wish} />                        
                    </div>

                )
            })
        }
        
    }

    return (
        <div>
            <h1>{props.title}</h1>            
            {renderWishList(props)}
            
        </div>
    )
}


export default WishList
