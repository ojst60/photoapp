import { AmplifySignOut} from '@aws-amplify/ui-react';
//import Navmenu from './Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

const Header = (props) =>{
      return (
        <div>
          
         <h1 className="Header-heading">Welcome</h1>
         <Router>
             <li></li>
             <li></li>
             <li><Link to="/profile" className="nav-link">Profile</Link></li>
        <li><Link to="/" className="nav-link">Posts</Link></li>     
        
        
        </Router>

       <div className="Signout"><AmplifySignOut/></div> 
        </div>
        
           )


}




export default Header;