import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

function App() {
  const arr = [];

  const members = {
    서채연: "대표",
    주승우: "부대표",
    임윤지: "총무",
    김윤미: "홍보팀장",
    김상민: "운영팀장",
    김효민: "기획팀장",
    안영훈: "기획 LEAD",
    이진형: "디자인 LEAD",
    이준규: "FE LEAD",
    정예림: "BE LEAD",
    김지은: "기획",
    이혜민: "기획",
    정의민: "기획",
    윤주호: "기획",
    박재영: "기획",
    유나경: "디자인",
    소희연: "디자인",
    유해인: "디자인",
    허동윤: "Front-End",
    오유은: "Front-End",
    한지원: "Front-End",
    강해솔: "Front-End",
    신수연: "Front-End",
    최서현: "Front-End",
    유승한: "Back-End",
    박수영: "Back-End",
    조수민: "Back-End",
    김교휘: "Back-End",
    박정우: "Back-End",
    유예지: "Back-End",
  };

  const [selectedMember, setSelectedMember] = useState({
    name: "",
    position: "",
  });

  useEffect(() => {
    // 페이지가 로드될 때 랜덤한 멤버 선택
    selectRandomMember();
  }, []);

  const selectRandomMember = () => {
    const memberKeys = Object.keys(members);
    const randomVal = Math.random();
    const randomIndex = Math.floor(randomVal * 30);

    const selectedName = memberKeys[randomIndex];
    const selectedPosition = members[selectedName];

    setSelectedMember({ name: selectedName, position: selectedPosition });

    //   // 테스트----
    //   // API 요청 주소
    //   const apiUrl = `http://localhost:8080/get-rand?i=${randomIndex}`;

    //   // fetch 함수를 사용하여 API 요청 보내기
    //   fetch(apiUrl)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    //       return response.json(); // JSON 형태로 응답 받기
    //     })
    //     .then((data) => {
    //       console.log("API 응답:", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
  };

  return (
    <>
      <div className="bg-back-gradation"></div>
      <div className="bg-gradation"></div>
      <div className="rotate" tabIndex="0">
        <div className="card front">
          <div className="ssu_logo"></div>
          <h1>11기 수료식</h1>
          <h1>럭키드로우</h1>
          <p></p>
          <div className="likelion_wrapper">
            <div className="likelion_logo"></div>
            <p></p>
          </div>
        </div>
        <div className="card back">
          <div>
            <span className="name">{selectedMember.name}</span>
            <span className="position">{selectedMember.position}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
