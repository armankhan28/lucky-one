import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Shop from './components/Shop.js/Shop';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
     <Blog></Blog>
    </div>
  );
}

export default App;
