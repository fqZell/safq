import { NavLink } from "react-router-dom";

const Slide = ({ slide }) => {
    return (
        <>
        <div className="slide-body">
            <h1>{slide.title}</h1>
            <p>{slide.sabtitle}</p>
            <NavLink className="button" to={slide.button.url}>К покупкам</NavLink>
        </div>
        <img 
        src={slide.banner} 
        alt={slide.title}
        />
        </>
    )
}

export default Slide;