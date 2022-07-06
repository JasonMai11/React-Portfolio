import './App.scss';
import "aos/dist/aos.css";
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import SkillsCertificates from './components/SkillsCertificates'
import Contact from './components/Contact'
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path = "React-Portfolio" index element = {<Home />} />
        <Route path = "about" element = {<About />}/>
        <Route path = "projects" element = {<Projects />}/>
        <Route path = "SkillsCertificates" element = {<SkillsCertificates/>}/>
        <Route path = "Contact" element = {<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;