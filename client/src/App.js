import React, {useState} from 'react';
import NavbarView from './components/NavbarView';
import ShoppingList from './components/ShoppingList';
// import ButtonOne from './components/testHoc/buttonOne'
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
// const [disable, setDisable] = useState(true);
//   const onClickDisable = () => {
//     setDisable(false);
//   }

  return (
    <Provider store={store}>
      <div className="App">
          <NavbarView />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
          {/* <ButtonOne disable={disable} />
          <div onClick={onClickDisable}>kaka</div> */}
      </div>
    </Provider>
  );
}

export default App;
