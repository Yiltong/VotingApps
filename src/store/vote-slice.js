import { createSlice } from "@reduxjs/toolkit"



const currentVoter = {id: "v1", token: "sfsdfdsd", isAdmin: true}
const initialState = {selectedVotedCandidate:"", currentVoter, selectedElection: "",
    idOfElectionToUpdate: "", addCandidateElectionId: ""
 }

const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        changeSelectedVoteCandidate(state, action) {
            state.selectedVotedCandidate = action.payload;
        },
        changeSelectedElection(state, action) {
            state.selectedElection = action.payload;
        },
        changeIdOfCandidateElectionId(state, action) {
            state.addCandidateElectionId = action.payload;
        },
        changeAddCandidateElectionId(state, action) {
            state.addCandidateElectionId = action.payload;
        },
    }
})

export const voteActions = voteSlice.actions

export default voteSlice;