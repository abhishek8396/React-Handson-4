import React from 'react'
import '../StylingComponent/Styling.css'
import { useNavigate } from 'react-router-dom'


function Student() {
  const navigate = useNavigate();
  const Changebtn=()=>{
    navigate('/AddNewStudent');
  }
  const Changebtn1 =()=>{
    navigate('/UpdateDetail');
  }
  return (
    <>
    <span className='container2'>
      <b>Student Detail</b>
      <button className='button1' onClick={()=>Changebtn()}>Add new Student</button>
        
      
      
    </span>
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Course</td>
          <td>Batch</td>
          <td>Change</td>
        </tr>
        <tr>
          <td>Jhon</td>
          <td>24</td>
          <td>October</td>
          <td>EA14</td>
          <td><button className='button2' onClick={()=>Changebtn1()}>Edit</button></td>
        </tr>
        <tr>
          <td>Sam</td>
          <td>25</td>
          <td>September</td>
          <td>EA17</td>
          <td><button className='button2' onClick={()=>Changebtn1()}>Edit</button></td>
        </tr>
        <tr>
          <td>Ram</td>
          <td>23</td>
          <td>December</td>
          <td>EA16</td>
          <td><button className='button2' onClick={()=>Changebtn1()}>Edit</button></td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default Student
