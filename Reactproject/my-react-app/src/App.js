import "./App.css";
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Footer from './componets/Footer';
import About from './componets/About';
import Carrer from './componets/Carrer';
import Contact from './componets/Contact';
import Ecommerce from "./componets/Ecommerce";
import OfficeErm from "./componets/OfficeErm";
import MiniBanking from "./componets/MiniBanking";
import Posonbilling from "./componets/Posonbilling";
import Goldloan from "./componets/Goldloan";
import Medicalbilling from "./componets/Medicalbilling";
import Customized from "./componets/Customized";
import Websitedesign from "./componets/Websitedesign";
import Bulk from "./componets/Bulk";
import Crm from "./componets/Crm";
import Erp from "./componets/Erp";
import Hrm from "./componets/Hrm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/officeErm" element={<OfficeErm />} />
        <Route path="/miniBanking" element={<MiniBanking />} />
        <Route path="/posonbilling" element={<Posonbilling />} />
        <Route path="/goldloan" element={<Goldloan />} /> 
        <Route path="/medicalbilling" element={<Medicalbilling />} /> 
        <Route path="/customized" element={<Customized />} /> 
        <Route path="/websitedesign" element={<Websitedesign />} /> 
        <Route path="/bulk" element={<Bulk/>} />
        <Route path="/crm" element={<Crm/>} />
        <Route path="/erp" element={<Erp/>} />
        <Route path="/hrm" element={<Hrm/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
