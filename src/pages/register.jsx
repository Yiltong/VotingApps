import { Link } from "react-router";
import NavBar from "../components/nav";
import { useEffect, useState } from "react";



export default function Register() {

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
                    
                    <input type="text" onChange={changeInput} name="fullName" placeholder="Full Name" autoComplete="true" autoFocus/>
                    <input type="email" onChange={changeInput} name="email" placeholder="email Address" autoComplete="true" />
                    <input type="password" onChange={changeInput} name="password" placeholder="password" autoComplete="true" />
                    <input type="password" onChange={changeInput} name="password2" placeholder="Comfirm password" autoComplete="true" />
                    <p>Already have an acount? <Link to='/'>Sign In</Link> </p>
                    <Link to='/elections'><button type="submit" className="btn primary">Register</button></Link>
                </form>
            </div>
        </section>
        </>
    )
}