import React from 'react'
import Wave from '../../components/Wave'
import AttendanceCard from '../../components/AttendanceCard'

const AttendancePage = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center mt-4'>Fill your Attendance!</h2>
      <AttendanceCard />
      <Wave />
    </div>
  )
}

export default AttendancePage