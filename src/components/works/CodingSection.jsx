import { useState } from "react";
import works from "../../data/works";
import WorkCard from "./WorkCard";
import Modal from "./Modal";

function CodingSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <h2>코딩 작업</h2>

      <div className="grid">
        {works
          .filter((item) => item.category === "coding")
          .map((item) => (
            <WorkCard key={item.id} item={item} onclick={setSelected} />
          ))}
      </div>

      <Modal item={selected} close={() => setSelected(null)} />
    </section>
  );
}

export default CodingSection;
