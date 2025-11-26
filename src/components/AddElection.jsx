import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";
// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";

export default function AddElection({ AddElect }) {
  const [titles, setTitle] = useState("");
  const [descriptions, setDescription] = useState("");
  const [thumbnails, setThumbnail] = useState(null);

  const dispatch = useDispatch()

    // close
  const closeModal = () => {
    dispatch(UiActions.closeElectionModal())
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titles || !descriptions || !thumbnails) {
      alert("Please fill in all fields!");
      return;
    }

    const newElection = {
      id: "e" + Date.now(),
      title: titles,
      description: descriptions,
      thumbnail: URL.createObjectURL(thumbnails), // show uploaded image
      candidates: [],
      voters: [],
    };

    AddElect(newElection);
    closeModal();
  };

  return (
    <section className="modal">
      <div className="modal__contain">
        <header className="modal__header">
          <h4>Create New Election</h4>
          <button className="modal__close" onClick={closeModal}>
            <IoMdClose />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div>
            <h6>Election Title:</h6>
            <input
              type="text"
              name="title"
              value={titles}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h6>Election Description</h6>
            <input
              type="text"
              name="description"
              value={descriptions}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <h6>Election Thumbnail</h6>
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              name="thumbnail"
              accept="image/png, image/jpeg, image/webp, image/avif"
            />
          </div>
          <button type="submit" className="btn primary">
            Add Election
          </button>
        </form>
      </div>
    </section>
  );
}




// export default function AddElection({AddElect}) {

//     const [titles, setTitle] = useState("")
//     const [descriptions, setDescription] = useState("")
//     const [thumbnails, setThumbnail] = useState("")

//     const dispatch = useDispatch()

//     // close
//     const closeModal = () => {
//             dispatch(UiActions.closeElectionModal())
//         }

//     const NewElect = {
//         title: titles,
//         description: descriptions,
//         thumbnail: thumbnails
//     }

//     return (
//        <section className="modal">
//             <div className="modal__contain">
//                 <header className="modal__header">
//                     <h4>Create New Election</h4>
//                     <button className="modal__close" onClick={closeModal}><IoMdClose/></button>
//                 </header>
//                 <form>
//                     <div>
//                         <h6>Election Title:</h6>
//                         <input type="text" name="title" value={titles} 
//                         onChange={e => setTitle(e.target.value)}/>
//                     </div>
//                     <div>
//                         <h6>Election Description</h6>
//                         <input type="text" name="description" 
//                         onChange={e => setDescription(e.target.value)}/>
//                     </div>
//                     <div>
//                         <h6>Election Thumbnail</h6>
//                         <input type="file" onChange={e => setThumbnail(e.target.files[0])} 
//                         name="thumbnail" accept="png, jpg, jpeg, webp, avif"/>
//                     </div>
//                     <button type="submit" onClick={() => {
//                         AddElect(
//                             NewElect
//                         )
                       
//                     }} className="btn primary">Add Election</button>
//                 </form>
//             </div>
//        </section>
//     )
// }