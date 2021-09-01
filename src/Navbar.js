import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

// import {,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';


function Navbar2(props) {
    return (
        // <div className="navbar navbar-expand-lg  navbar-light " >
        //     <div className="container-fluid text-white">
        //         <a className="navbar-brand logo text-white" href="#"><span>R</span>Raman</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             {/* <span className="navbar-toggler-icon" ></span> */}
        //             {/* <img src={menu} alt=" " /> */}
                    
        //         </button>
        //         <div className="collapse navbar-collapse " id="navbarNav">
        //             <ul className="navbar-nav ">
        //                 <li className="nav-item text-white">
        //                     <a className="click nav-link " to="/">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className=" click nav-link" to="#">Features</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className=" click nav-link" to="/contact">Contact</Link>
        //                 </li>
        //                 {/* <li className="nav-item">
        //                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //                 </li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </div>
//         <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#brand">React-Bootstrap</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="#">
//         Link
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link
//       </NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.3}>Separated link</MenuItem>
//       </NavDropdown>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">
//         Link Right
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link Right
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<Navbar collapseOnSelect expand="lg" bg={props.color} variant="dark">
  <Navbar.Brand href="/" className="logo text-white"><span>R</span>Raman</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav >
      <Nav.Link  ><Link className="click" to="/">Home</Link></Nav.Link>
      <Nav.Link  ><Link className="click" to="#">Project</Link></Nav.Link>
      <Nav.Link  ><Link className="click" to="#">Resume</Link></Nav.Link>
      <Nav.Link >
      <Link className="click" to="/contact">Contacts</Link>
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>






    );
}

export default Navbar2;
