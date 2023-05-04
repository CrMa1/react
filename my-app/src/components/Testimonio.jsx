import "../stylesheets/Testimony.css";

function Testimony(props){
  return (
    <div className="d-testimony">
      <img className="img-testimony" src={require(`../images/${props.image}.jpg`)} alt="Foto emma" />
      <div className="d-content">
        <p className="basic-info"><strong>{props.name}</strong> en {props.country}</p>
        <p className="work-info">{props.position} en <strong>{props.company}</strong></p>
        <p className="testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;