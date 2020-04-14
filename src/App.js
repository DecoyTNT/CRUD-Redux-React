import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Productos from './components/productos/Productos';
import NuevoProducto from './components/productos/NuevoProducto';
import EditarProducto from './components/productos/EditarProducto';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
