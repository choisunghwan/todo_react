import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Greeting from './components/Greeting';
import FoodList from './components/FoodList';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from './components/user/Join';

function App() {
  return (
    <>
      <Header />
      {/* <Greeting/> */}
      {/* <FoodList /> */}
      {/* <Hello/> */}
      {/* <ItemMain/> */}
      <Join />
      {/* <TodoTemplate/> */}
      <Footer />
      
    </>
  );
}

export default App;
