import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";

export default function UpdateElection({ election, onUpdate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    const dispatch = useDispatch();

    // prefill form with current election data
    useEffect(() => {
        if (election) {
            setTitle(election.title);
            setDescription(election.description);
            setThumbnail(election.thumbnail);
        }
    }, [election]);

    // close modal
    const closeModal = () => {
        dispatch(UiActions.closeUpdateElectionModal());
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedElection = {
            ...election,
            title,
            description,
            thumbnail: thumbnail || election.thumbnail,
        };

        onUpdate(updatedElection);
        closeModal();
    };

    return (
        <section className="modal">
            <div className="modal__contain">
                <header className="modal__header">
                    <h4>Update Election</h4>
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <h6>Election Description:</h6>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <h6>Election Thumbnail:</h6>
                        <input
                            type="file"
                            onChange={(e) => setThumbnail(URL.createObjectURL(e.target.files[0]))}
                            name="thumbnail"
                            accept="image/png, image/jpg, image/jpeg, image/webp, image/avif"
                        />
                    </div>

                    <button type="submit" className="btn primary">
                        Update Election
                    </button>
                </form>
            </div>
        </section>
    );
}



// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { UiActions } from "../store/ui-slice";



// export default function UpdateElection() {

//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [thumbnail, setThumbnail] = useState("")

//     const dispatch = useDispatch()

//     // close
//     const closeModal = () => {
//             dispatch(UiActions.closeUpdateElectionModal())
//         }

//     return (
//        <section className="modal">
//             <div className="modal__contain">
//                 <header className="modal__header">
//                     <h4>Update Election</h4>
//                     <button className="modal__close" onClick={closeModal}><IoMdClose/></button>
//                 </header>
//                 <form>
//                     <div>
//                         <h6>Election Title:</h6>
//                         <input type="text" name="title" value={title} 
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
//                     <button type="submit" className="btn primary">Update Election</button>
//                 </form>
//             </div>
//        </section>
//     )
// }