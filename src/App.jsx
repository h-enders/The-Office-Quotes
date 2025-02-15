import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Quotes from './Pages/Quotes'
import About from './Pages/About'
import Layout from './Layout'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/quotes" element={<Quotes/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
