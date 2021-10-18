// css import
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
    // step 11 call useFirebase and doing distructuring here

    return (
        <div className="form-item">
            <div >
                <h2>Log In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>for new users? <Link to="/register">Create Account</Link></p>
                <div>---------or------------</div>
                <button className="btn-regular">Submit</button>

            </div>
        </div>
    );
};

export default Login;

// step one firebase setup done
// step 02 log in page set up done
// step 03 for log in show route setup in app.js done