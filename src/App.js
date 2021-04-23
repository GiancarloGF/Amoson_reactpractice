import React, {Component} from 'react'
import Menu from './componentsjs/Menu'
import List from './componentsjs/List'
import './css/App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      books:[
        {id:0, rating: 4, title: 'Harry Potter y el caliz de fuego', image:'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image:'libro02.jpg'},
        {id:2, rating: 5, title: 'Código Da Vinci', image:'libro03.jpg'},
        {id:3, rating: 5, title: 'El Principito', image:'libro04.jpg'},
        {id:4, rating: 4, title: 'Sobrenatural', image:'libro05.jpg'},
        // {id:5, rating: 3, title: 'Gallinazos sin plumas', image:'libro06.jfif'},
        // {id:6, rating: 5, title: '100 Años de soledad', image:'libro07.jfif'},
        // {id:7, rating: 4, title: 'Padre rico padre pobre', image:'libro08.jfif'}
      ],
      //Usamos una copia de mi estado this.state.books  SOLO para el renderizado en pantalla (Se lo pasamos a nuestro componente List como prop)
      copyBooks:[]
    };
  }

  // Usamos el metodo componentDidMount para que cuando nuestra App se monte (se renderize completamente) llame  a initBooks (hacer una copia de nuestro this.state.books)
  componentDidMount(){
    this.initBooks();
  };
  // Definimos una funcion para que se actualize nuestro this.state.copyBooks, es cual sera una copia de nuestro this.state.books(principal)
  initBooks=()=>{
    this.setState((state, props)=>({
      copyBooks: [ ...state.books]
    }));
  }



  // Definimos una funcion onsearch para identificar los items que hacen match con lo que se escribe en el input de search.
  onSearch=(query)=>{
    if (query==='') {//Si nuestro valor del input es vacio, llamamos a una funcion para que nuestro this.state.copyBooks sea una copia a this.state.books
        this.initBooks();
    } else {
        const temp=[...this.state.books];//Creamos una variable temporal para copiar mi this.state.books
        let res=[];//Creamos una variable para almacenar los items que hagan match

        //Realizamos un mapeo de cada uno de nuestros items en en nuestro this.state.books en ese momento, y si el item tiene un titulo que hace match con el valor del input, agregamos ese item a nuestro array res.
        temp.forEach(item=>{
          if(item.title.toLocaleLowerCase().indexOf(query)>-1){//Aqui miramos a travez del titulo en minuscula y verificamos si tiene en su estructura el valor del input (si el index es positivo significa que si se encuentra dentro).
            res.push(item);
          }
        });

        this.setState({copyBooks: [...res]});//Actualizamos nuestro estado en la propiedad this.state.copyBooks(Encargado de renderizar los items).
    }
  }



  // Definimos una funcion para agregar un nuevo elemento a nuestro this.state.books
  onAdd=(item)=>{
    let temp=[...this.state.books];//Creamos un array temporal. Primero con la copia de this.state.books
    const id=temp[temp.length-1].id+1;//Creamos una variable con logica para identificar el id
    item['id']=id;//Agregamos el atibuto id a nuestro nuevo item
    temp.push(item);//Agregamos nuestro nuevo item a nuestro array temporal. En este momento, nuestro estado principal aun no se actualiza.

    this.setState({books: [...temp]})//Actualizamos nuestro estado principal actualiando nuestro this.state.books con la copia de nuestro array temporal.
    this.initBooks();//Llamamos a esta funcion para actualizar nuestro this.state.copyBooks (Para el renderizado)
  }

  // Definimos una funcion para actualizar nuestro estado padre con los nuevos valores de nuestro item modificado en item.js
  onUpdateRating=(item)=>{
    let temp=[...this.state.books];
    const index=temp.findIndex(x=>x.id===item.id);//Guardamos en variable el numero de index al cual vamos a actualizar.

    temp[index].title=item.title;
    temp[index].image=item.image;
    temp[index].rating=item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  // Definimos una funcion para quitar un item seleccionado.
  onRemove=(id)=>{
      let temp=[...this.state.books];//Guardamos en una variable una copia de nuestro this.state.books.
      const res=temp.filter(item=> item.id != id)//El filter nos devolvera un nuevo array solo los elementos que cumplan con la condicion dada.

      this.setState({//Actualizamos nuestro estado this.state.books con el nuevo array arrojado por filter.
        books: [...res]
      });

      this.initBooks();//Llamamos a la funcion para actualizar el renderizado.
  }

  render(){
    return (
      <div className='app'>
        <Menu title='Amozon' onAdd={this.onAdd} onSearch={this.onSearch}/>
        <List 
          items={this.state.copyBooks} 
          onUpdateRating={this.onUpdateRating}
          onRemove={this.onRemove}
        />
    </div>
    )
  }
}

export default App;
 