import works from "../../data/works";
import WorkCard from "./WorkCard";

function ProjectSection() {
  return (
    <>
      <section>
        <h2>협업 작업</h2>
        <div className="grid">
          {works
            .filter((item) => item.category === "project")
            .map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </>
  );
}
export default ProjectSection;
