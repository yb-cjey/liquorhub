import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Liquor Hub.co.ke</h1>
        </header>

        <Navbar />
        
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/makepayment' element={<MakePayment />} />
          <Route path='/' element={<GetProducts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <Footer/>
    </Router>

  );
}

export default App;