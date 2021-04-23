import React from 'react'

class Search extends React.Component{

      constructor(props){
            super(props);
      }

      // Definimos una funcion para manejar el cambio del valor en el input de searc
      onChangeEventSearch=(e)=>{
            const query=e.target.value.toString().toLowerCase();//Lo que escriba en el input se convertira en string y a minusculas.
            this.props.onSearch(query);
      }


      render(){
            return(
                  <input type='text' onChange={this.onChangeEventSearch}/>
            )

      }
};

export default Search;