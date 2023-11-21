import { Header } from './components/header'
import { Footer } from './components/footer';
import { Body } from './components/body';
import './styles/basic.css';

export default function App(){
  return(
    <div className='app'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}
