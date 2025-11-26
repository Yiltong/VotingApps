import React, { useState } from "react"
import { elections as dummyElection } from "../data"
import ElectionResult from "../components/electionResult"


export default function Result() {

    const [elections, setElections] = useState(dummyElection)
    return (
        <section className="results">
            <div className="container result__container">
                {
                    elections.map(election => <ElectionResult key={election.id} {...election} />)
                }
            </div>
        </section>
    )
}