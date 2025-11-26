import { Link } from "react-router";
import NavBar from "../components/nav";
import { useEffect, useState } from "react";



export default function Login () {

    const [userData, setUserData] = useState({fullname:'fullName',
        email:'email', password:'password', password2:'password2'
    })

    const changeInput = (e) => {
        setUserData(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <>
            <NavBar />
            <section className="register">
            <div className="container register__container">
                <h2> Sign Up</h2>
                <form>
                    
                    <input type="email" onChange={changeInput} name="email" placeholder="email Address" autoComplete="true" />
                    <input type="password" onChange={changeInput} name="password" placeholder="password" autoComplete="true" />
                    <p>Don't have an acount? <Link to='/register'>Sign Up</Link> </p>
                    <Link to='/elections'><button type="submit" className="btn primary">Login</button></Link>
                    
                </form>
            </div>
        </section>
        </>
    )
}