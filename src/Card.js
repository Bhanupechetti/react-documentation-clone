function Card(props) {
    return(
        <div style={{color:"white",border:"1px solid white"}}>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h3>{props.age}</h3>
        </div>
    );
}
export default Card;