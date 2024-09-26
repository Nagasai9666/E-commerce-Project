/*

Routing : using routing , we can navigate between different components.
index.js 
 import {BrowserRouter} from 'react-router-dom';
   <BrowserRouter>
         <App/>
   <BrowserRouter/>

App.js
import {Routes,Route} from 'react-router-dom';

<Routes>
   <Route path="/" element={<componentname/>}></Route>
<Routes/>

import {Link} from 'react-router-dom';

<Link to='/routeName'></Link>

useNavigate:
import {useNavigate} from 'react-router-dom';

const navigate = useNavigate();

navigate('/routeName');



 */

import { Link, useNavigate } from 'react-router-dom';
function Navabar() {
  const navigate = useNavigate();

  const navigateTocart = () => {
    navigate('/cart');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products'>products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/users'>Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/todo'>todo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/views'>viewgobibo</Link>
            </li>
            {/* <li className="nav-item">
          <Link className="nav-link" to='/user'>sers</Link>
        </li> */}
            <li className="nav-item">
              <a className="nav-link" aria-disabled='true' onClick={navigateTocart}>Cart</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/loginUser'>Login</Link>
            </li>
           </ul>
        </div>
      </div>
    </nav>

  )

}

export default Navabar;