import React from 'react'
import '../estilos/Boton.css'

//function Boton ({ texto, esBotonDeClic, manejarClic }) 
class Boton extends React.Component {   //Con el componente tipo clase, no debemos pasar las props como en el funcional, como en la línea de código 4
  render () {
    return (
      <button 
          className={ this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }    //Así le asigno una clase u otra dependiente del valor de entrada 
          onClick={ this.props.manejarClic }>
          {this.props.texto}
      </button>
    )
  };
};

export default Boton 