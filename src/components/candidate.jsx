import { useDispatch } from "react-redux"
import { UiActions } from "../store/ui-slice"
import { voteActions } from "../store/vote-slice"


export default function Candidates ({image, id, fullName, motto}) {

    const dispatch = useDispatch()

    // open comfirm vote modal
    const openCandidateModal = () => {
        dispatch(UiActions.openVoteCandidateModal())
        dispatch(voteActions.changeSelectedVoteCandidate(id))
    }

    return (
        <article className="candidate">
            <div className="candidate__image">
                <img src={image} alt={fullName} />
            </div>
            <h5>{fullName}</h5>
            <small>{motto}</small>
            <button className="btn primary" onClick={openCandidateModal}>Vote</button>
        </article>
    )
}