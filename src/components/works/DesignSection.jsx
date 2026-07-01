import works from "../../data/works";
import WorkCard from "./WorkCard";

function DesignSection() {
  return (
    <>
      <section>
        <h2>디자인 작업</h2>
        <div className="grid">
          {works
            .filter((item) => item.category === "design")
            .map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </>
  );
}
export default DesignSection;
