import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <ItemListContainer greeting={'Bienvenidos a mi proyecto FA'}/>
    </div>
  );
}

export default App;

//Luego en App se le agregará Ofertas y mas opciones para diferenciarlo de ItemListContainer