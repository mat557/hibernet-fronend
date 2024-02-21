import React from 'react'
import Banner from './Banner/Banner'
import Stat from './Stat/Stat'
import Footer from '../../shared/Footer/Footer'
import Report from './Report/Report'
import Comment from './Comment/Comment'

const Home = () => {
  return (
    <>
        <Banner />
        <Stat />
        <Comment />
        <Report />
        <Footer />
    </>
  )
}

export default Home