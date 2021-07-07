import { Component } from 'react';


class Product extends Component {
  showForProduct(product){
      if(product.status){
          return <h1>True</h1>
      }
      else{
          return <h2>False</h2>
      }
  }  
  render(){
    var product = {
        status : true
    }  
    var users = [
        {
            id:1,
            name:'nguyen van a'
        },
        {
            id:2,
            name:'nguyen van b'
        },
        {
            id:3,
            name:'nguyen van c'
        }
    ]
    var elements=users.map((users,index)=>{
        return(
            <div key={users.id}>
                <h2>{users.name}</h2>
            </div>
        )
    })
    return (
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='thumbnail'>
                <img data-src="#" alt=""></img>
                <div className='caption'>
                    <h3>Iphone</h3>
                    <p>1.600d</p>
                    <p>
                        <button>Action</button>
                    </p>
                </div>
            </div>
            {this.showForProduct(product)}
            {elements}
        </div>
    );
  }
  }


export default Product;