import { useState } from "react";
import Button from "@mui/material/Button";
import Thlogo from "../assets/TH_01.svg";
import thSSlogo from "../assets/TH_SS-1.svg";
import thESlogo from "../assets/TH_ES.svg";
import thMNlogo from "../assets/TH_MIN.svg";
import thNlogo from "../assets/TH_N-1.svg";

const Personlist = () => {
  const [data, setData] = useState([
    { id: 1, name: "mam", gender: "ชาย" },
    { id: 2, name: "ake", gender: "ชาย" },
    { id: 3, name: "toon", gender: "หญิง" },
  ]);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>จำนวนประชกร {data.length} </h1>
      <Button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</Button>
      {show 
      }
      <img src={Thlogo} width={100} alt="แผนที่ประเทศไทย" />
      <div className="flex flex-row gap-2 justify-evenly my-4">
        
        <img src={thNlogo} width={100} alt="ภาคเหนือ" /> {/* คุณอาจมีโลโก้ซ้ำ ผมใช้ตามที่คุณ import มานะครับ */}
        <img src={thMNlogo} width={100} alt="ภาคกลาง" />
        <img src={thESlogo} width={100} alt="ภาคอีสาน" />
        <img src={thSSlogo} width={100} alt="ภาคใต้" />
      </div>

      <Button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</Button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={thNlogo} width={10} />
              <h4>
                {item.name} | {item.gender} |
              </h4>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Personlist;
