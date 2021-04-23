import React from 'react'
import '../css/Item.css'

class  Item extends React.Component{

      constructor(props){
            super(props);
            this.state={
                  title:'',
                  image:'',
                  rating:1,
                  stars:[]
            }

      };

      componentDidMount(){//Entiendo, que este metodo se aplica una vez el componente esta montado con datos iniciales, para luego modificarlos y actualizar nuestro estado de este item en especifico.
            this.setState({//Primero asignamos sus valores segun los valores iniciales del estado padre App.js, luego los modificaremos.
                  id: this.props.id,
                  title: this.props.title,
                  image: this.props.image,
                  rating: parseInt(this.props.rating),
                  stars: Array(parseInt(this.props.rating)).fill(0)
            })
      }

      // Definimos una funcion para actualizar nuestro estado en rating y stars segun el numero que se coloque en nuestro input tipo select.
      onChangeRating=(e)=>{
            const rating = parseInt(e.target.value);//Pasamos a numero entero valor.

            this.setState({
                  rating: parseInt(e.target.value),
                  stars: Array(parseInt(e.target.value)).fill(0)
            });

            this.props.onUpdateRating({id: this.state.id, title: this.state.title, image: this.state.image, rating: this.state.rating})


      }

      // Definimos una funcion para remover el item seleccionado.

      onRemove=(e)=>{
            this.props.onRemove(this.props.id);
      }

      render(){
            return(
                 <div className='item'>
                       <div className='image'><img src={'images/' + this.state.image} width='100%'/></div>
                       <div className='title'>{this.state.title}</div>
                       <div className='rating'>
                              <p>
                              {
                                    this.state.stars.map(x=>
                                          <img src='images/star.png' width='32'/>)
                              }
                              </p>
      
                              Calificación:
                              {/* Tener cuidado con este value****** */}
                              <select value={this.state.rating} onChange={this.onChangeRating}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                              </select>
      
                       </div>
                       <div className='actions'>
                             <button onClick={this.onRemove}>Eliminar</button>
                       </div>
                 </div>
            );
      }
};

export default Item;




// En la linea 56: Si yo le asigo el valor al value de this.props.rating, se colocaria un valor al cual le pertenecia a mi anterior actualizacion.