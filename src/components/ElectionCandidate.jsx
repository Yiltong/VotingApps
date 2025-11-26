import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";
import { voteActions } from "../store/vote-slice";
import { useParams } from "react-router";


export default function ElectionCandidate({electionCandidates}) {

    const [electionCandidatess, setCan] = useState(electionCandidates)

    function deleteCan(index) {
            const newTodoList = electionCandidatess.filter((can, canIndex) => {
                return canIndex !== index 
            })
            setCan(newTodoList)
    }

    const {id} = useParams()

     const dispatch = useDispatch()

    // open comfirm vote modal
    const openCandidateModal = () => {
        dispatch(UiActions.openVoteCandidateModal())
        dispatch(voteActions.changeSelectedVoteCandidate(id))
    }

    return (
        <>
        {
            electionCandidatess.map((candidate, canIndex) => {
                return(
                    <li className="electionCandidate" key={canIndex}>
                    <div className="electionCandidate__image">
                        <img src={candidate.image} alt={candidate.fullName} />
                    </div>
                    <div>
                        <h5>{candidate.fullName}</h5>
                        <small>{candidate.motto?.length > 60 ? candidate.motto.substring(0, 60)
                        + "..." : candidate.motto}</small>
                        <button className="electionCandidate__btn"  onClick={() => {
                            deleteCan(canIndex)
                        }}><IoMdTrash /></button>
                        <button className="btn primary" onClick={openCandidateModal}>Vote</button>
                    </div>
                    </li>
                )
            }
            )
        }
        </>
        
    )
}

// export default function ElectionCandidate({fullName, image, motto, id, deleteCan}) {
//     return (
//         {
//             electionCandidatess.map(candidate => <ElectionCandidate key={candidate.id}
//                 {...candidate} deleteCan={deleteCan} />
//             )
//         }
//         <li className="electionCandidate">
//             <div className="electionCandidate__image">
//                 <img src={image} alt={fullName} />
//             </div>
//             <div>
//                 <h5>{fullName}</h5>
//                 <small>{motto?.length > 60 ? motto.substring(0, 60)
//                 + "..." : motto}</small>
//                 <button className="electionCandidate__btn" onClick={deleteCan(id)}><IoMdTrash /></button>
//             </div>
//         </li>
//     )
// }