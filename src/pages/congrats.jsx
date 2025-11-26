import { Link } from "react-router";



export default function Congrats() {
    return (
        <section className="congrats">
            <div className="container congrats__container">
                <h2>Thank you for voting</h2>
                <p>Your has been added, you will be 
                    redirected to the result page
                </p>
                <Link to='/results' className="btn sm primary">See Results</Link>
            </div>
        </section>
    )
}