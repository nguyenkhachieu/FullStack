import React from 'react';
import NavbarView from './components/NavbarView';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavbarView />
        <ShoppingList />
    </div>
  );
}

export default App;
