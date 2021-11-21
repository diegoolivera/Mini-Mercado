
import './App.css';
import { BrowserRouter as Router,Route,Routes,Switch } from 'react-router-dom';

//componentes
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/contenedor/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Carrito from './vistas/carrito/Carrito';
import ItemList from "././componentes/itemList/ItemList"
import Formulario from './componentes/formulario/formulario';
import DetalleCompra from './componentes/detalleCompra/DetalleCompra';
//context
import {CartProvider} from "./componentes/context/CartContext"


function App() {
  return (

    <div className="App">
      <Router>
        <CartProvider>

          <NavBar/>

          <Switch>

            <Route exact component={ItemList} path="/" />
            <Route  component={ItemListContainer} path="/Inicio" />
            <Route  component={ItemList} path="/categories/:categoriaId" />
            <Route  component={ItemDetailContainer} path="/detail/:id" />
            <Route  component={Carrito} path="/cart" />
            <Route  component={Formulario} path="/form" />
            <Route  component={DetalleCompra} path="/detalle" />
        
          </Switch>

        </CartProvider>
      </Router>
       

        
       

        
        
        
    </div>
  );
}

export default App;
