// Child Component
// - โชว์สัตว์ตัวเดียวและหัวใจ

// import พวกรูปภาพ จะได้ path เข้ามา
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import horse from "./svg/horse.svg"
import heart from "./svg/heart.svg"
import { useState } from "react"
import "./AnimalShow.css"


// สร้างตัวแปรที่เป็น Obj ไว้ mapping ภาพ กับ props 'type'
const svgMap = {
    // ค่าเท่ากับ key : value เพราะถ้า key และ value เหมือนกัน ละได้
    bird, // ค่าเท่ากับ bird : bird,
    cat, // ค่าเท่ากับ cat : cat,
    cow, // ค่าเท่ากับ cow : cow,
    dog, // ค่าเท่ากับ dog : dog,
    gator, // ค่าเท่ากับ gator : gator,
    horse // ค่าเท่ากับ horse : horse
}

// - component นี้จะรับค่ามาจากสัตว์ใน App.js แยกกัน 
// - คือ กด 1 ครั้ง รับมา 1 ตัว ใส่ใน props ชื่อว่า type (ชื่อสัตว์)
// - เช่น [ { type: 'cow' }, { type: 'bird' } ]
// <img src={svgMap[type]} /> หมายถึงเราจะเข้าถึง Obj "svgMap" key 'type'
// ซึ่ง 'type' จะเป็น key ซึ่งก็คือชื่อสัตว์ต่างๆ เวลาเข้าถึง Obj จะเป็น ชื่อ Obj[key]
// ด้านล่างจะเป็นส่วนที่ mapping ภาพกับชื่อ key


function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)

    const onUserClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <div className="animal-show" onClick={ onUserClick }>
            <img src={ svgMap[type] } alt="animal" className="animal" />
            <img src={ heart } alt="heart" style={ { width : 10 + 10 * clicks } } className="heart" />
        </div>
    )
}

export default AnimalShow
