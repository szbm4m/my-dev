import { useState } from "react";
import Button from "@mui/material/Button";

function Page() {
  const name = "mam leaning react";
  const [age, setAge] = useState(27);

  //   function add() {
  //     setAge(age + 1);
  //   } ฟังก์ชั่น add แบบรูปเต็ม

  function subtract() {
    setAge(age - 1);
  }
  function reset() {
    setAge(27);
  }

  return (
    <>
      <h2 className="bg-red-500">Test create function App : {name} </h2>
      <h3> How Old are you ? : {age} year</h3>

      {/* //ฟังก์ชั่น add แบบลดรูป */}
      <Button color="secondary" onClick={() => setAge(age + 1)}>
        UP
      </Button>

      <Button variant="contained" color="success" onClick={subtract}>
        Down
      </Button>
      <Button variant="contained" color="error" onClick={reset}>
        Reset
      </Button>
    </>
  );
}

export default Page;
