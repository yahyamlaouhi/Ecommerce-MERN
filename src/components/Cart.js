import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        const {cartItems}=this.props
        return (
            <div>
                {cartItems.length===0?<div className="cart cart-header">Cart is empty</div>:
                (<div className="cart cart-header">You Have {cartItems.length} in the cart{""}</div>)}
                 <div>
                     <div className="cart">
                         <ul className="cart-items">
                           {cartItems.map(item=>(
                               <li key={item._id}>
                                   <div>
                                       <img src={item.image} alt={item.title}/>
                                   </div>
                                   <div>
                                      <div>{item.title}</div> 
                                      <div className="right">
                                          {"$"+item.price} x {item.count} {"   "}
                                       <button onClick={()=>this.props.removeFromItem(item)}>Remove</button>
                                       </div>
                                   </div>

                               </li>
                           ))}
                         </ul>

                     </div>
                     <div>
                         {cartItems.length!==0 && (<div>
                             <div className="cart">
                                 <div className="total"> 
                                 <div>
                                     Total:{"$"}{
                                         cartItems.reduce((a,c)=>a+c.price * c.count,0)
                                     }
                                     </div>
                                     <button className="button primary">Proceed</button>
                                 </div>
                             </div>
                         </div>)}
                     </div>
                 </div>
            </div>
        )
    }
}

export default Cart
