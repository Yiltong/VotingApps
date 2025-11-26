import { useNavigate } from 'react-router'
import Image from '../assets/404.gif'
import { useEffect } from 'react'
import NavBar from '../components/nav'


export default function Error() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 3000)
    })

    return (
        <div>
            <NavBar />
            <section className="errorpage">
            <div className="errorPage__container">
                <img src={Image} alt="Page not found" />
                <h1>404</h1>
                <p>This page dose not exist. you will 
                    be redirect to the previous page shortly
                </p>
            </div>
        </section>
        </div>
        
    )
}