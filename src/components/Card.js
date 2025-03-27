function Card(props) {
  return (
    <div className="card">
      <br />
      <div className="text-center">
        <img
          alt="card-img"
          src={props.img} // ✅ No need to modify it
          className={`text-center img-fluid ${props.imgClassName || ""}`} // Use the passed class or default to empty
        />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
