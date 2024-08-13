import React from 'react'

const Home = ({ scrollPosition }) => {
  return (

    <div className={`bg-white  ${ scrollPosition > 0 ? "pt-24" : "pt-44"}`}>
      hello world
    </div>
  )
}

export default Home