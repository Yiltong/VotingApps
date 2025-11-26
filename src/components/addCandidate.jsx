import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { UiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

export default function AddCandidate({ electionId, onAddCandidate }) {
  const [fullNames, setFullName] = useState("");
  const [mottos, setMotto] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(UiActions.closeAddCandidateModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullNames || !mottos || !imageFile) {
      alert("Please fill in all fields!");
      return;
    }

    const newCan = {
      id: "c" + Date.now(),
      fullName: fullNames,
      image: URL.createObjectURL(imageFile), // preview URL
      motto: mottos,
      voteCount: 0,
      election: electionId,
    };

    // Call parent handler
    onAddCandidate(newCan);
    let a = onAddCandidate(newCan);
    //console.log(newCan)

    // reset and close
    setFullName("");
    setMotto("");
    setImageFile(null);
    closeModal();
    console.log(a)
  };

  return (
    <section className="modal">
      <div className="modal__content">
        <header className="modal__header">
          <h4>Add Candidate</h4>
          <button className="modal__close" onClick={closeModal}><IoMdClose /></button>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <h6>Candidate Name:</h6>
            <input type="text" value={fullNames} name="fullName"
              onChange={e => setFullName(e.target.value)} />
          </div>

          <div>
            <h6>Candidate Motto:</h6>
            <input type="text" value={mottos} name="motto"
              onChange={e => setMotto(e.target.value)} />
          </div>

          <div>
            <h6>Candidate Image:</h6>
            <input type="file" name="image"
              onChange={e => setImageFile(e.target.files[0])}
              accept="image/png, image/jpg, image/jpeg, image/webp, image/avif" />
          </div>

          <button type="submit" className="btn primary">Add Candidate</button>
        </form>
      </div>
    </section>
  )
}


// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { UiActions } from "../store/ui-slice";
// import { useDispatch } from "react-redux";

// export default function AddCandidate({ electionId, onAddCandidate }) {
//   const [fullNames, setFullName] = useState("");
//   const [mottos, setMotto] = useState("");
//   const [images, setImage] = useState(null);

//   const dispatch = useDispatch();

//   const closeModal = () => {
//     dispatch(UiActions.closeAddCandidateModal());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!fullNames || !mottos || !images) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const newCan = {
//       id: "c" + Date.now(),
//       fullName: fullNames,
//       image: URL.createObjectURL(images),
//       motto: mottos,
//       voteCount: 0,
//       election: electionId, // ✅ Use current election ID dynamically
//     };

//     // ✅ Send new candidate to parent component
//     onAddCandidate(newCan);

//     // Close modal
//     closeModal();

//     // Reset form
//     setFullName("");
//     setMotto("");
//     setImage(null);
//   };

//   return (
//     <section className="modal">
//       <div className="modal__content">
//         <header className="modal__header">
//           <h4>Add Candidate</h4>
//           <button className="modal__close" onClick={closeModal}>
//             <IoMdClose />
//           </button>
//         </header>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <h6>Candidate Name:</h6>
//             <input
//               type="text"
//               value={fullNames}
//               name="fullName"
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           </div>

//           <div>
//             <h6>Candidate Motto:</h6>
//             <input
//               type="text"
//               value={mottos}
//               name="motto"
//               onChange={(e) => setMotto(e.target.value)}
//             />
//           </div>

//           <div>
//             <h6>Candidate Image:</h6>
//             <input
//               type="file"
//               name="image"
//               onChange={(e) => setImage(e.target.files[0])}
//               accept="image/png, image/jpg, image/jpeg, image/webp, image/avif"
//             />
//           </div>

//           <button type="submit" className="btn primary">
//             Add Candidate
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



// // import { useState } from "react";
// // import { IoMdClose } from "react-icons/io";
// // import { UiActions } from "../store/ui-slice";
// // import { useDispatch } from "react-redux";




// // export default function AddCandidate({ onAddCandidate, electionId }) {

// //     const [fullNames, setFullName] = useState("")
// //     const [mottos, setMotto] = useState("")
// //     const [images, setImage] = useState(null)
// //     //const [electionCandidatess, setCan] = useState(electionCandidates)
    

// //     const dispatch = useDispatch()

// //     const closeModal = () => {
// //         dispatch(UiActions.closeAddCandidateModal())
// //     }
        
// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         if (!fullNames || !mottos || !images) {
// //         alert("Please fill in all fields!");
// //         return;
// //         }


// //         // function AddCan(newCand) {
// //         //     const newElectList = [...electionCandidatess, newCand]
// //         //     setCan(newElectList)
// //         // }

// //         const newCan = {
// //             id: "c9" + Date.now(),
// //             fullName: fullNames,
// //             image: URL.createObjectURL(images), // show uploaded image
// //             motto: mottos,
// //             voteCount: 3,
// //             election: electionId,
// //         };

// //         onAddCandidate(newCan);
// //         closeModal();
// //         console.log(electionCandidates)
// //   };


// //     return (
// //         <>
// //             <section className="modal">
// //                 <div className="modal__content">
// //                     <header className="modal__header">
// //                         <h4>Add Candidate</h4>
// //                         <button className="modal__close" onClick={closeModal}><IoMdClose /></button>
// //                     </header>
// //                     <form onSubmit={handleSubmit} >
// //                         <div>
// //                             <h6>Candidate Name:</h6>
// //                             <input type="text" value={fullNames} name="fullName"
// //                             onChange={e => setFullName(e.target.value)} />
// //                         </div>
            
// //                         <div>
// //                             <h6>Candidate motto:</h6>
// //                             <input type="text" value={mottos} name="motto"
// //                             onChange={e => setMotto(e.target.value)} />
// //                         </div>

// //                         <div>  
// //                             <h6>Candidate Image:</h6>
// //                             <input type="file" name="image"
// //                             onChange={e => setImage(e.target.files[0])} 
// //                             accept="png, jpg, jpeg, webp, avif"/>
// //                         </div>
// //                         <button type="submit" className="btn primary">Add Candidate</button>
// //                     </form>
// //                 </div>
// //             </section>
            
// //         </>
// //     )
// // }


// // // https://hng13.slack.com/archttps://app.slack.com/client/T09AMR8A9C3hives/C09KQ5V09D5/p1761252089164909?thread_ts=1761252089.164909&cid=C09KQ5V09D5