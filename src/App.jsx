import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Kidsada Klaysuban (Aun)">
          <h3>Content Creator</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2003/02/24").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66980655946
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : aunbai753@gmail.com</p>
          <p>www.aunbai753.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ผมสนใจเกี่ยวกับการตัดต่อโดยใช้โปรแกรม Adobe Premiere Pro และชอบตัดต่อรูปภาพด้วยโปรแกรม Adobe Photoshop สามารถทำงานเป็นทีมและพร้อมที่จะพัฒนาตนเองได้อยู่ตลอดเวลาอย่างสม่ำเสมอ และพร้อมที่จะแก้ไขสิ่งที่ผิดพลาดให้ดียิ่งขึ้น</p>
        </Title>

        <Title title="Work Experience">
          <h4>ทำงานเกี่ยวกับช่าง Fiber Optic</h4>
          <p>• หน้าที่ เดินสายแลนและสายไฟเบอร์ออฟติกเข้าหัวแลน สไปซ์สายไฟเบอร์ จัดสายเข้าตู้ระบบอินเทอร์เน็ต</p>
        </Title>

        <Title title="Skills">
          <p>• มีความสามารถในการตัดต่อคลิป VDO ลงยูทูป และทำภาพยนต์สั้น</p>
          <p>• มีความอดทนต่อการทำงานที่ได้รับมอบหมายและสามารถแก้ปัญหาเฉพาะหน้า ขยันเรียนรู้ตลอดเวลา</p>

        </Title>

      </div>
    </main>
  )
}

export default App
