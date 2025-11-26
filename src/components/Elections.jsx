import { Link } from "react-router";




export default function Elections ({id, title, description, thumbnail, openUpdateModal, election}) {
        
    return (
        <article className="election">
            <div className="election__image">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="election__info">
                <Link to={`/election/${id}`}><h4>{title}</h4></Link>
                <p>{description?.length > 255 ? description.substring(0, 255) + "..." : description}</p>
                <div className="election__cta">
                    <Link to={`/election/${id}`} className="btn sm">View</Link>
                   
                   <button
                        className="btn sm primary"
                        onClick={() => openUpdateModal(election)}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </article>
    )
}