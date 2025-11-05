// frontend/src/App.jsx

import React from "react"; // 1. Import React (useState, useMemo, createContext)
import { ThemeProvider, createTheme } from '@mui/material/styles'; // 2. Import เครื่องมือสร้าง Theme
import CssBaseline from '@mui/material/CssBaseline';

// 3. Import "ตัวเลือกสี" ที่เราสร้างไว้
import { paletteOptions } from './theme.js'; 

// 4. Import Components ลูกๆ ทั้งหมด
import Header from "./components/Header.jsx";
import Personlist from "./components/Personlist.jsx";
import Page from "./Page.jsx";
import Home from "./pages/Home/Home.jsx"; // 5. ย้าย Home มาไว้ที่นี่

// 6. สร้าง "กล่อง" สำหรับส่งต่อฟังก์ชันสลับโหมด
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  // 7. สร้าง "สวิตช์ไฟ" (State) เพื่อจำโหมดปัจจุบัน
  const [mode, setMode] = React.useState('light'); // เริ่มต้นที่ 'light'

  // 8. สร้าง "ฟังก์ชันสลับโหมด" (เก็บใน useMemo เพื่อไม่ให้รันใหม่ทุกครั้ง)
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // 9. สร้าง "Theme" (เก็บใน useMemo เพื่อให้มันสร้างใหม่ต่อเมื่อ 'mode' เปลี่ยน)
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, // ใช้ 'mode' จาก State
          ...paletteOptions, // เอาสี primary, secondary ที่เรากำหนดไว้มาใช้
        },
      }),
    [mode], // บอกให้สร้างใหม่ เมื่อ [mode] เปลี่ยน
  );

  // 10. "ห่อหุ้ม" แอปทั้งหมดด้วย Providers
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* สำคัญมาก! เพื่อปรับพื้นหลังตามโหมด */}
        <Home /> {/* Home จะมีปุ่มสลับโหมด */}
        <Header/>
        <Personlist/>
        <Page/>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;