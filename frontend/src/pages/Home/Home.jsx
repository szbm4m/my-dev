// frontend/src/pages/Home/Home.jsx

import React from 'react';
import { useTheme } from '@mui/material/styles'; // 1. Import useTheme เพื่อเช็กโหมดปัจจุบัน
import Button from '@mui/material/Button';

// 2. Import "กล่อง" ที่เราสร้างไว้ใน App.jsx
import { ColorModeContext } from '../../App.jsx'; 

export default function Home() {
  // 3. เปิด "กล่อง" เพื่อเอาฟังก์ชันสลับโหมดมาใช้
  const colorMode = React.useContext(ColorModeContext);
  
  // 4. ดูว่าตอนนี้ธีมเป็นโหมดอะไร
  const theme = useTheme();

  return (
    <div className='text-lg'>
      {/* 5. แสดงโหมดปัจจุบัน */}
      This app is using {theme.palette.mode} mode
      
      {/* 6. สร้างปุ่มที่เมื่อคลิก (onClick) ให้เรียกฟังก์ชัน toggleColorMode */}
      <Button variant="contained" onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
}