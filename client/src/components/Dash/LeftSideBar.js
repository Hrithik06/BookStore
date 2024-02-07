
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight,HiArrowSmLeft, HiChartPie, HiInbox, HiShoppingBag, HiUser, HiOutlineCloudUpload, HiHome } from 'react-icons/hi';

const LeftSideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className=''>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload Book
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage/Edit Books
        </Sidebar.Item>
        <Sidebar.Item href="/" icon={HiHome}>
          Home
        </Sidebar.Item>
        {/* <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Login
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiArrowSmLeft}>
          Logout
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>

    </Sidebar.Items>
  </Sidebar>
  )
}

export default LeftSideBar
