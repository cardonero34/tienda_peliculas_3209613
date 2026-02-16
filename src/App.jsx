/* rafc */
import './App.css'
import { User } from './components/user'


export const App = () => {
  return (
    <>
    
      <div className="circle"></div>
      <p style={{fontSize: "2rem", color: 'orange', textDecoration: "underline"}}>hola React</p>
      <p>hola JavaScript</p>
      <button>Enviar</button>

      <h1>Tarjeta de usuario </h1>

      <User imagen="/img1.jpeg" nombre="Supernova" estado=""/>
      <User imagen="/img2.jpeg" nombre="Stacy" estado=""/>
      <User imagen="/img3.jpeg" nombre="Ricktiminus Sancheziminius" estado=""/>
      <User imagen="/img4.jpeg" nombre="Tony" estado=""/>


    </>
  )
}
