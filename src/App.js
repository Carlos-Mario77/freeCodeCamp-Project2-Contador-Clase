import freeCodeCampLogo from '../src/imagenes/FreeCodeCamp_logo1.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      numClics: 0
    };

    this.manejarClic = this.manejarClic.bind(this);               //El bind permite asociar el this a los métodos this.manejarClic y this.reiniciarContador para poderlo usar al momento de pasar estas funciones a algún componente
    this.reiniciarContador = this.reiniciarContador.bind(this);
  };

  manejarClic () {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));  //Usamos sintaxis de desestructuración { numClics }, se debe retornar un objeto con la propiedad que queremos actualizar
  };

  reiniciarContador () {
    this.setState({ numClics: 0 });                             //Para reiniciar el contador, lo seteo en 0 de esta manera, solo así muestra el 0 en pantalla, de otras formas que probé, reiniciaba pero no se mostraba el 0 en pantalla, quedaba en blanco
  };


    render () {
      return (
        <div className="App">
          <div className='freecodecamp-logo-contenedor'>
            <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp'/>
          </div>
          <div className='contenedor-principal'>
            <Contador numClics={this.state.numClics}/>
            <Boton 
              texto='Clic' 
              esBotonDeClic={true}
              manejarClic={this.manejarClic} />
            <Boton 
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={this.reiniciarContador} />
          </div>
        </div>
      );
    };
};




// function App() {

//   const [numClics, setNumClics] = useState(0);  //Si dejo el valor inicial del estado en '' o [], no aumenta el valor del contador sino que concatena los números, 1, 11, 111, 1111, 11111, por eso debo setearlo en 0 (cero).

//   const manejarClic = () => {
//     setNumClics(numClics + 1);
//   };
//   const reiniciarContador = () => {
//     setNumClics(0);                             //Para reiniciar el contador, lo seteo en 0 de esta manera, solo así muestra el 0 en pantalla, de otras formas que probé, reiniciaba pero no se mostraba el 0 en pantalla, quedaba en blanco
//   };

  
// };

export default App;
