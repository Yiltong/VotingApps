import { useState } from "react";
import NavBar from "../components/nav";
import { candidates } from "../data";
import CandidateRating from "./candidateRating"
import { Link } from "react-router";



export default function ElectionResult({id, thumbnail, title}) {

    const electionCandidate = candidates.filter(candidate => {
    return candidate.election == id
    })

    const [totalVotes, setTotalVotes] = useState(345)

    return (
        <div>
            <NavBar />
            <article className="elections">
                <header className="result__header">
                    <h4>{title}</h4>
                    <div className="result__header-image">
                        <img src={thumbnail} alt={title} />
                    </div>
                </header>
                <ul className="result__list">
                    {
                        electionCandidate.map(candidate => <CandidateRating
                            key={candidate.id} {...candidate} totalVotes={totalVotes}/>
                        )
                    }
                </ul>
                <Link to={`/elections/${id}/candidates`} className="btn primary full">Enter election</Link>
            </article>
        </div>
    )
}