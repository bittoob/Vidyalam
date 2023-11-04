import "./App.css"
import Header from "./components/Header"
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router,  Route } from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' element={<Home/>} />
          
        </Switch>
        
      </Router>
    </>
  )
}

export default App;