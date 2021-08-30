import React, { Component } from 'react'
import Fade from "react-reveal/Fade"

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            adress:"",
            email:"",
            showCheckout:false

        }
    }
    handelInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
    createOrder=(e)=>{
        e.preventDefault()
        const order={
            name:this.state.name,
            email:this.state.email,
            adress:this.state.adress,
            cartItems:this.state.cartItems,
        }
        this.props.createOrder(order)

    }
    
    render() {
        
        const {cartItems}=this.props
        return (
            <div>
                {cartItems.length===0?<div className="cart cart-header">Cart is empty</div>:
                (<div className="cart cart-header">You Have {cartItems.length} in the cart{""}</div>)}
                 <div>
                     <div className="cart">
                         <Fade left cascade>
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
                         </Fade>
                     </div>
                     <div className="cart">
                         {cartItems.length!==0 && (<div>
                             <div className="cart">
                                 <div className="total"> 
                                 <div>
                                     Total:{"$"}{
                                         cartItems.reduce((a,c)=>a+c.price * c.count,0)
                                     }
                                     </div>
                                     
                                     <button onClick={()=>{this.setState({showCheckout:true})}} className="button primary">Proceed</button>
                                 </div>
                         
                             </div> 
                             </div>)}
                        </div>
                </div>
                <Fade right cascade>
                <div>
                
                    {this.state.showCheckout && (<div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container" >
                                <li>
                                    <label>Email</label>
                                    <input name="email"
                                    type="email"
                                    required
                                    onChange={this.handelInput}/>

                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name"
                                    type="text"
                                    required
                                    onChange={this.handelInput}/>

                                </li>
                                <li>
                                    <label>Adress</label>
                                    <input name="adress"
                                    type="text"
                                    required
                                    onChange={this.handelInput}/>

                                </li>
                                <button createOrder={this.createOrder} className="button primary" type="submit">
                                    Checkout 
                                </button>
                            </ul>
                        </form>
                             </div> ) }
                </div>
                </Fade>
                </div>
            
                         
                   
                             
               
              

                   
            
        )
    
    } } 
                                    

export default Cart;
