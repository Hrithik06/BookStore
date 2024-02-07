import { Outlet } from "react-router-dom"
import LeftSideBar from "./LeftSideBar"


const DashBoardLayout = () => {
  return (
    <div className="flex">
      <LeftSideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout
