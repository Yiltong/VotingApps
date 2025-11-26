import { useState } from "react"
import { elections as dummyElection } from "../data"
import Elections from "../components/Elections"
import NavBar from "../components/nav"
import AddElection from "../components/AddElection"
import { useDispatch, useSelector } from "react-redux"
import { UiActions } from "../store/ui-slice"
import UpdateElection from "../components/updateElectio"

export default function Election() {
    const [elections, setElection] = useState(dummyElection)
    const [selectedElection, setSelectedElection] = useState(null)

    const dispatch = useDispatch()

    const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
    const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing)

    // open add modal
    const openModal = () => {
        dispatch(UiActions.openElectionModal())
    }

    // open update modal
    const openUpdateModal = (election) => {
        setSelectedElection(election)
        dispatch(UiActions.openUpdateElectionModal())
    }

    // add new election
    function AddElect(newElect) {
        const newElectList = [...elections, newElect]
        setElection(newElectList)
    }

    // update election
    function handleUpdate(updatedElection) {
        const updatedList = elections.map(election =>
            election.id === updatedElection.id ? updatedElection : election
        )
        setElection(updatedList)
    }

    return (
        <> 
            <NavBar />
            <section className="elections">
                <div className="container election__container">
                    <header className="election__header">
                        <h1>Ongoing Elections</h1>
                        <button className="btn primary" onClick={openModal}>
                            Create new Election
                        </button>
                    </header>
                    <menu className="elections__menu">
                        {
                            elections.map(election => (
                                <div key={election.id}>
                                    <Elections {...election} 
                                        openUpdateModal={openUpdateModal}
                                        election={election}
                                    />
                                    
                                </div>
                            ))
                        }
                    </menu>
                </div>
            </section>

            {electionModalShowing && <AddElection AddElect={AddElect} />}
            {updateElectionModalShowing && (
                <UpdateElection
                    election={selectedElection}
                    onUpdate={handleUpdate}
                />
            )}
        </>
    )
}



// import { useState } from "react"
// import { elections as dummyElection } from "../data"
// import Elections from "../components/Elections"
// import NavBar from "../components/nav"
// import AddElection from "../components/AddElection"
// import { useDispatch, useSelector } from "react-redux"
// import { UiActions } from "../store/ui-slice"
// import UpdateElection from "../components/updateElectio"


// export default function Election() {

//     const [elections, setElection] = useState(dummyElection)

//     const dispatch = useDispatch()

//     // open add modal
//     const openModal = () => {
//         dispatch(UiActions.openElectionModal())
//     }

//     const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
//     const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing)

//     function AddElect(newElect) {
//         const newElectList = [...elections, newElect]
//         setElection(newElectList)
//     }

//     return (
//         <> 
//             <NavBar />
//             <section className="elections">
//                 <div className="container election__container">
//                     <header className="election__header">
//                         <h1>Ongoing Elections</h1>
//                         <button className="btn primary" onClick={openModal}>Create new Election</button>
//                         <menu className="elections__menu">
//                             {
//                                 elections.map(election => <Elections key={election.id} {...election} />)
//                             }
//                         </menu>
//                     </header>
//                 </div>
//             </section>
//             {electionModalShowing && <AddElection AddElect={AddElect}/>}
//             {updateElectionModalShowing && <UpdateElection/>}
//         </>
//     )
// }