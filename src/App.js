import { Route, Routes } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import BottomBar from "./shared/BottomBar/BottomBar"
import NavBar from "./shared/Navbar/NavBar"
import Home from "./component/Home/Home"
import Login from "./component/Auth/Login"
import About from "./component/About/About"
import Blog from "./component/Blog/Blog";
import Courses from "./component/Courses/Courses"
import FAQ from "./component/FAQ/FAQ"
import Dashboard from "./component/DashBoard/Dashboard"
import Qna from "./component/Q&A/Qna"
import RequreAuth from "./shared/RequreAuth"
import Signin from "./component/Auth/Signin"
import { Toaster } from "react-hot-toast"
import ConsitantLogIn from "./component/Auth/ConsitantLogIn"
import Course from "./component/DashBoard/Courses/Course"
import Blogs from "./component/DashBoard/Blogs/Blogs"
import Profile from "./component/DashBoard/Profile/Profile"
import Comment from "./component/DashBoard/Comment/Comment"
import Question from "./component/DashBoard/Question/Question"
import AddBlogs from "./component/DashBoard/Blogs/AddBlogs"
import UpdateBlog from "./component/DashBoard/Blogs/UpdateBlog"
import AddCourse from "./component/DashBoard/Courses/AddCourse"
import UpdateCourse from "./component/DashBoard/Courses/UpdateCourse"
import NotFound from "./shared/NotFound/NotFound"
import User from "./component/DashBoard/User/User"


function App() {
  const [open,setOpen] = useState(false)
  const [dashOpen,setDashOpen] = useState(false)

  const navmenu = useRef()
  const sidemenu = useRef()

  useEffect(()=>{
    const handleClickDashOutside = (event) => {
      if(sidemenu.current && sidemenu.current.contains(event.target)){
        setDashOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickDashOutside)
    return () => {
      document.removeEventListener('click', handleClickDashOutside)
    }
  },[sidemenu,dashOpen])



  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (navmenu.current && !navmenu.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  },[navmenu])

  return (
    <>
      <NavBar
        open={open}
        setOpen={setOpen}
        navmenu={navmenu}
      />
        <Routes>
            <Route element={<ConsitantLogIn />}>
              <Route path='/' element={<Home />} />
              <Route path='courses' element={<Courses />} />
              <Route path='about' element={<About />} />
              <Route path='faq' element={<FAQ />} />
              <Route element={<RequreAuth />}>
                  <Route path='dash' element={
                    <Dashboard
                      dashOpen={dashOpen}
                      sidemenu={sidemenu}>
                    </Dashboard>}>
                      <Route index element={<Profile />}/>
                      <Route path="course" element={<Course />}/>
                      <Route path="course/add" element={<AddCourse />}/>
                      {/* <Route path="course/update" element={<UpdateCourse />}/> */}
                      <Route path="blog" element={<Blogs />}/>
                      <Route path="blog/add" element={<AddBlogs />}/>
                      <Route path="blog/update" element={<UpdateBlog />}/>
                      <Route path="comment" element={<Comment />}/>
                      <Route path="question" element={<Question />}/>
                      <Route path="users" element={<User />}/>
                      {/* <Route path="user/all" element={<Question />}/> */}
                  </Route>
              </Route>
              <Route path='blog' element={<Blog />} />
              <Route path='qna' element={<Qna />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signin' element={<Signin />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      <BottomBar 
        dashOpen={dashOpen}
        setDashOpen={setDashOpen}
      />
      <Toaster 
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
      
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  );
}

export default App;



//navbar color:  rgb(47, 110, 107);

