import { useEffect, useState } from "react";

function Modal({ item, close }) {
  // item이 없으면 아무것도 렌더링하지 않는다.
  const [showMore, setShowMore] = useState(false);
  // 화면에 랜더링 된 후 실행되는 작업을
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [item]); // [] 없으면 (특정 값이 변경될 때마다) 계속 실행

  if (!item) return null; // 모달을 아에 안 보일때 일반적 설정
  return (
    <>
      <div className="modal-bg" onClick={close}>
        <button className="close-btn" onClick={close}>
          {" "}
          ✕{" "}
        </button>{" "}
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {/* 상세이미지 */}
          <div className={`modal-img-box ${showMore ? "open" : ""}`}>
            <img src={item.image} alt={item.title} />
            {/* 더보기 버튼 */}
            <button className="more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "접기 ▲" : "상세페이지 더보기 ▼"}
            </button>
          </div>
          {/* 작업물 상세 정보 */}
          <div className="modal-info">
            <h2>{item.title}</h2>
            <p>
              <strong>📅 작업기간</strong>
              <span>{item.period}</span>
            </p>

            <p>
              <strong>🛠 사용기술</strong>
              <span>{item.tool}</span>
            </p>

            <p>
              <strong>👨‍💻 기여도</strong>
              <span>{item.role}</span>
            </p>

            <p>
              <strong>📖 프로젝트 소개</strong>
            </p>
            <div className="desc">{item.desc}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
