import React from 'react'
import Banner from './Banner/Banner'
import Stat from './Stat/Stat'
import Footer from '../../shared/Footer/Footer'
import Report from './Report/Report'
import Comment from './Comment/Comment'
import CourseView from './CourseView/CourseView'
import BLogView from './BLogView/BLogView'
import OverView from './OverView/OverView'


const Home = () => {
  return (
    <>
        <Banner />
        <Stat />
        <OverView />
        <CourseView />
        <BLogView />
        <Comment />
        <Report />
        <Footer />
    </>
  )
}

export default Home