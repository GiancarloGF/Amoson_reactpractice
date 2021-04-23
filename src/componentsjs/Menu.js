import React from 'react'
import Search from './Search'
import '../css/Menu.css'
import PanelAdd from './PanelAdd'

class  Menu extends React.Component{

      constructor(props){
            super(props);
            this.state= {newItemPanel: false};
            this.add=this.add.bind(this);
            this.onCancel=this.onCancel.bind(this);
      }


      // Funcion para aparecer el form de ingreso de nuevo libro.
      add(){
            this.setState({newItemPanel: true})
      }
      // Funcion para desaparecer el form de ingreso de nuevo libro.
      onCancel(){
            this.setState({newItemPanel: false})
      }
       
      render(){

            return(
                  <div className='container'>
                        <div className='subcontainer'>
      
                              <div className='logo'>
                                    {this.props.title}
                              </div>
      
                              <div className='search'>
                                    <Search onSearch={this.props.onSearch}  />
                              </div>
      
                              <div className='actions'>
                                    <button onClick={this.add} className='button btn-blue'>+Añadir nuevo libro</button>
                              </div>
      
                        </div>
                        
                        {
                              (this.state.newItemPanel)?<PanelAdd onCancel={this.onCancel} onAdd={this.props.onAdd}/> :null
                        }
                        
                  </div>
            )
      }
}


export default Menu;