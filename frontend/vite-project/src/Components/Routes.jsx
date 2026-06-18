import { Route, Routes } from 'react-router-dom'
import ReadAllJob from './job/ReadAllJob'
import JobDetails from './job/JobDetails'
import CreateJob1 from './job/CreateJob1'
import UpdateJob2 from './job/UpdateJob2'


const DwRoutes = () => {
  return (
    <main className="page-content">
           <Routes>
        <Route path='job'>
        <Route index element={<ReadAllJob></ReadAllJob>}></Route>
        <Route path = "create" element ={<CreateJob1></CreateJob1>}></Route>
        <Route path = ":id" element ={<JobDetails></JobDetails>}></Route>
        <Route path = "update/:id" element ={<UpdateJob2></UpdateJob2>}></Route>
        </Route>
      </Routes>
    </main>
  )
}

export default DwRoutes
