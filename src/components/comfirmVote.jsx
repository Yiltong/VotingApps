import { useEffect, useState } from "react"
import { candidates } from "../data"
import { useDispatch, useSelector } from "react-redux"
import { UiActions } from "../store/ui-slice"


export default function ComfirmVotes () {

    const [modalCandidate, setModalCandidate] = useState({})


    // get selected candidate
    
    const dispatch = useDispatch()

    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal())
    }

    const selectedVotedCandidate = useSelector(state => state.vote.selectedVotedCandidate)

    const FetchCandidate = () => {
        candidates.find(candidate => {
            if(candidate.id === selectedVotedCandidate) {
                setModalCandidate(candidate)
            }
        })
    }


    // const FetchCandidate = () => {
    //     eleectionCandidates.find(candidate => {
    //         if(candidate.id === selectedVotedCandidate) {
    //             setModalCandidate(candidate)
    //         }
    //     })
    // }

    useEffect(() => {
        FetchCandidate()
    }, [])

    const Congrats = () => {
        alert("Thank you for voting!");
        closeCandidateModal()
    } 

    // function congrats() {
    //     return (
    //         alert("Please fill in all fields!");
    //         closeCandidateModal()
    //     )
    // }


    return (
        <section className="modal">
            <div className="modal__content comfirm__vote-content">
                <h5>Please comfirm your vote</h5>
                <div className="comfirm__vote-image">
                    <img src={modalCandidate.image} alt={modalCandidate.fullName} />
                </div>
                {/* <h2>{modalCandidate?.fullName.length > 17 ? modalCandidate?.fullName.substring(0, 17)+ "..." :
                    modalCandidate?.fullName}</h2>
                <p>{modalCandidate?.motto.length > 45 ? modalCandidate?.motto.substring(0, 45)+ "..." :
                    modalCandidate?.motto}</p> */}
                <div className="comfirm__vote-cta">
                    <button className="btn" onClick={closeCandidateModal}>Cancel</button>
                    <button className="btn primary" onClick={Congrats}>Comfirm</button>
                </div>
            </div>
        </section>
    )
}