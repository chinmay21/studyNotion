import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900 text-white">

      {/* --- Sidebar for large screens --- */}
      <div className="hidden lg:block">
        <Sidebar onLinkClick={() => setSidebarOpen(false)} />
      </div>

      {/* --- Mobile Sidebar --- */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className={`fixed left-4 z-50 p-2 rounded-md hover:bg-richblack-700 bg-richblack-800 ${
          sidebarOpen ? "top-[2px] left-[10px]" : "bottom-[50px]top-[59px]"}`
          }
        >
          {sidebarOpen ? <AiOutlineClose size={22}/> : <AiOutlineMenu size={22} />}
        </button>

        {/* Sliding Sidebar + Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Sidebar Slide-In */}
            <div className="relative z-50 w-64 bg-richblack-800 border-r border-richblack-700 transform transition-transform duration-300 translate-x-0">
              {/* Sidebar content */}
              <Sidebar />
            </div>
          </div>
        )}
      </div>

      {/* --- Main Content --- */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto px-4 lg:px-0">
        <div className="mx-auto w-full max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

