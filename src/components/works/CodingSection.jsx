import works from "../../data/works";
import WorkCard from "./WorkCard";

function CodingSection() {
  return (
    <>
      <section>
        <h2>코딩 작업</h2>
        <div className="grid">
          {works
            .filter((item) => item.category === "coding")
            .map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </>
  );
}
export default CodingSection;
