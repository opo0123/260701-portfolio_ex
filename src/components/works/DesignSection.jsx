import { useState } from "react";
import works from "../../data/works";
import WorkCard from "./WorkCard";
import Modal from "./Modal";

function DesignSection() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <section>
        <h2>디자인 작업</h2>
        <div className="grid">
          {works
            .filter((item) => item.category === "design")
            .map((item) => (
              <WorkCard key={item.id} item={item} onclick={setSelected} />
            ))}
        </div>
        <Modal item={selected} close={() => setSelected(null)} />
      </section>
    </>
  );
}
export default DesignSection;