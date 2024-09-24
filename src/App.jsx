import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!"/>
    </div>
  )
}

export default App
