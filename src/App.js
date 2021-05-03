import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeLayout from './pages/layout/HomeLayout';
import Home from './pages/homepage/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Blogs from './pages/blogs/Blogs';
import ContactMe from './pages/contactMe/ContactMe';
import PermanentNav from './pages/Shared/PermanentNav';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <PermanentNav />
      <AnimatePresence>
        <Switch>
          <HomeLayout>
            <Route exact path='/' component={Home} />
            <Route path='/about-me' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blog' component={Blogs} />
            <Route path='/contact-me' component={ContactMe} />
          </HomeLayout>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
