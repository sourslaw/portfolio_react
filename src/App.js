import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css

import AboutPage from './pages/About';
import ResumePage from './pages/Resume';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';

import Layout from './components/layout/Layout.js';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AboutPage />
        </Route>

        <Route path='/resume'>
          <ResumePage />
        </Route>

        <Route path='/portfolio'>
          <PortfolioPage />
        </Route>

        <Route path='/contact'>
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;