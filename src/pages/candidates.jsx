import { useParams } from "react-router"
import { candidates as dummyCandidates } from "../data"
import Candidates from "../components/candidate"
import ComfirmVotes from "../components/comfirmYourVotes"
import NavBar from "../components/nav"
import { useSelector } from "react-redux"
 
export default function Candidate() {

    const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

    const {id} = useParams()

    const candidates = dummyCandidates.filter(candidate => candidate.election === id)

    return (
        <>
            <NavBar />
            <section className="candidates">
                <header className="candidate__header">
                    <h1>Vote your candidate</h1>
                    <p>These are the candidates</p>
                </header>
                <div className="container candidate__container">
                    {
                        candidates.map(candidate => <Candidates key={candidate.id} {...candidate} />)
                    }
                </div>
            </section>
            {voteCandidateModalShowing && <ComfirmVotes />}
            
        </>
    )
}



// npm install @reduxjs/toolkit react-redux --save --force
// export default function Candidate () {
//     return (
//         <div>
//         </div>
//     )
// }