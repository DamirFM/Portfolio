import Nav from './components/Nav';
import Footer from './components/Footer';
// import AboutMe from './pages/AboutPage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      < Footer/>
    </div>
  )
}

export default App
