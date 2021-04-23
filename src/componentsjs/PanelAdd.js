import React from 'react'


class PanelAdd extends React.Component{

      constructor(props){
            super(props);
            this.state={
                  title:'',
                  image:'',
                  rating:1
            }

            this.onChangeTitle=this.onChangeTitle.bind(this);
            this.onChangeImage=this.onChangeImage.bind(this);

      }


// Funciones onChange
      onChangeTitle=(e)=>{
            this.setState({title: e.target.value})
      }

      onChangeImage=(e)=>{
            this.setState({image: e.target.value})
      }

      onChangeRating=(e)=>{
            const rating=parseInt(e.target.value);
            this.setState({rating: rating})
      }

// Funcion para prevenir el enviado por defecto del form
      onSubmit=(e)=>{
            e.preventDefault();

            const title=this.state.title;
            const image=this.state.image;
            const rating=this.state.rating;

            this.props.onAdd({title: title, image: image, rating: rating});//Llamo a una funcion que viene desde mi App.js (El que tiene el estado principal)
            this.props.onCancel();
      }


      render(){
            return (
                  <div className='new-item-panel-container'>
                        <div className='new-item-panel'>
                              <form onSubmit={this.onSubmit}>
                                    <p>
                                          <label>Título del libro</label><br/>
                                          <input onChange={this.onChangeTitle} type='text' name='title' className='input'/>
                                    </p>
      
                                    <p>
                                          <label>Nombre de la imagen</label><br/>
                                          <input onChange={this.onChangeImage} type='text' name='name' className='input'/>
                                    </p>
      
                                    <p>
                                          <label>Calificación</label><br/>
                                          <select onChange={this.onChangeRating}>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                          </select>
                                    </p>
      
                                    <input type='submit' className='button btn-blue' value='Registrar libro'/>
                                    <button className='button btn-normal' onClick={this.props.onCancel}>Cancelar</button>
                              </form>
                        </div>
                  </div>
            )
      }

}


export default PanelAdd;