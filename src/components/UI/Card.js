import classes from './Card.module.css'

function Card(props) {
    return (
        <div className = {classes.card}>
            <img src = {props.img} className = {classes.image} alt ="Food pic"/>
            <h2 className = {classes.CardTitle}>{props.title}</h2>
            <p className = {classes.Description}>{props.body}</p>
            <button className = {classes.Button}>View Recipe!</button>
        </div>
    )
}

export default Card;