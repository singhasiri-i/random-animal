// Parent Component 
// - ดึง component ย่อยๆ มาโชว์
// - มีปุ่มกดเพิ่มสัตว์เข้ามาในเว็บจาก AnimalShow.js
import { useState } from "react"; // จะใช้ useState ต้อง import เข้ามาก่อน
import AnimalShow from "./AnimalShow"
import "./App.css"

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    // สร้าง function สำหรับ random สัตว์ โดยให้มัน return เป็น animal[ตำแหน่งที่ random ได้]
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]) // ค่าเริ่มต้นใน useState เป็น array เปล่าๆ

    const handleClick = () => { 
        setAnimals([...animals, getRandomAnimal()])
        // ค่าดั้งเดิมคือ [] พอกดครั้งแรก state "animals" จะเป็น [สัตว์สุ่ม1] 
        // กดครั้งที่สอง state "animals" จะเป็น [สัตว์สุ่ม1, สัตว์สุ่ม2]
    }

    const renderAnimals = animals.map((animal, index) => {
        // ใช้ map เพื่อทำให้ array ที่เคยเป็น string กลายเป็น array ที่เก็บ component "AnimalShow"
        return <AnimalShow type={animal} key={index} />
        // การใช้ map สามารถระบุ key เพื่อให้ react รู้ว่าเป็น component อะไร สร้างขึ้นตอนไหน
        // จากนั้นเอาค่าที่ได้จากการ map component ไปใส่ปีกกาเพื่อแสดงที่หน้าจอในด้านล่าง
        // ทุกครั้งที่กด สัตว์จะถูกส่งมาที่ component "AnimalShow" และเพิ่ม <div> เรื่อยๆ ตามครั้งที่กด
    })

    return (
        <div className="app">
            <button onClick={ handleClick }>Add Animal</button>
            <div className="animal-list">{ renderAnimals }</div>
        </div>
    )
}

export default App
