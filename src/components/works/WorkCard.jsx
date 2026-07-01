function WorkCard({ item }) {
  return (
    <>
      <div className="card">
        <img src={item.image} alt={item.title} />
        <div className="card-body">
          <h3>{item.title}</h3>
          <p>📅{item.period}</p>
          <p>🛠{item.skill}</p>
        </div>
      </div>
    </>
  );
}
export default WorkCard;
