// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Makepayment from './Components/Makepayment';
import Navbar from './Components/Navbar';
import Uploadproduct from './Components/Uploadproduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GetProducts from './Components/GetProducts';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header py-5"> {/* Added padding */}
          <Container>
            {/* <div className="d-flex flex-column align-items-center">
              <h1 className="display-4 mb-4 fw-bold text-center"> 
                Golden Horizon Ways
              </h1>
              <p className="lead text-center">Discover amazing products</p>
            </div> */}
          </Container>
        </header>

        <Navbar />

        <Container className="py-4"> {/* Added padding container for content */}
          <Routes>
            <Route path='/signup' Component={Signup} />
            <Route path='/signin' Component={Signin} />
            <Route path='/Upload' Component={Uploadproduct} />
            <Route path='/makepayment' Component={Makepayment} />
            <Route path='/' Component={GetProducts} />
          </Routes>
        </Container>

        <footer className="bg-dark text-white py-4 mt-4"> {/* Added footer */}
          <Container>
            <p className="text-center mb-0">© 2023 Golden Horizon Ways. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;