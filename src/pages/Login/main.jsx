
import {Row, Col,} from "react-bootstrap";
import './login.scss';
import Loginleft from "./Components/loginleft";
import Loginright from "./Components/loginright";
const Login = () => {
    return (
        <div className="login-container">
        <Row className="landing">
          <Col className="login-left"><Loginleft /></Col>

          <Col className="login-right"><Loginright /></Col>
        </Row>
        </div>
          
        
    )
}

export default Login