import { useParams } from "react-router"
import { candidates, elections as dummyelection, voters } from "../data"
import ElectionCandidate from "../components/ElectionCandidate"
import { IoAddOutline } from "react-icons/io5"
import NavBar from "../components/nav"
import AddCandidate from "../components/addCandidate"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";
import { useState } from "react"
import ComfirmVotes from "../components/comfirmVote"


export default function ElectionDetails() {
    const {id} = useParams()

    const [electionCandidates, setElectionCandidates] = useState(candidates.filter(candidate => candidate.election === id))

    const currentElections = dummyelection.find(election => election.id == id)

   // const electionCandidates = candidates.filter(candidate => candidate.election === id)

    const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)
    const dispatch = useDispatch()

    // ✅ Function to add a new candidate
    const handleAddCandidate = (newCandidate) => {
    setElectionCandidates(prev => [...prev, newCandidate])
  }

  const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

    
    const openModal = () => {
        dispatch(UiActions.openAddCandidateModal())
    }
    return (
        <>
            <NavBar />
            <section className="electionDetails">
            <div className="container electionDetails__container">
                <h2>{currentElections.title}</h2>
                <p>{currentElections.description}</p>
                <div className="electoinDetails__image">
                    <img src={currentElections.thumbnail} alt={currentElections.title} height={100} width={200}/>
                </div> 
            </div>
            <menu className="electionDetails__candidates">
                {/* {
                    electionCandidatess.map(candidate => <ElectionCandidate key={candidate.id}
                        {...candidate} deleteCan={deleteCan} />
                    )
                } */}
                <ElectionCandidate electionCandidates={electionCandidates}/>
                <button className="add__candidate-btn" onClick={openModal}><IoAddOutline /></button>
            </menu>
            <div className="voters">
                <h2>Voter</h2>
            <table className="voters__table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                ,        <th>Time</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        voters.map(voter =><tr key={voter.id}>
                        <td><h5>{voter.fullName}</h5></td>
                        <td>{voter.email}</td>
                        <td>20:23:02</td>
                    </tr>)
                    }
                </tbody>
            </table>
            </div>
        </section>
        {addCandidateModalShowing && <AddCandidate onAddCandidate={handleAddCandidate} electionId={id}/>}
        {voteCandidateModalShowing && <ComfirmVotes />}
        </>
    )
}
