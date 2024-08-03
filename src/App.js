import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import MouseAura from './components/Mouse/MouseAura';
import Layout from './components/Layout'

function App() {
  return (
    <>
      <MouseAura />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;