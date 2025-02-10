import React from 'react'
import motion from 'framer-motion'


const Home = () => {
    return(
        <motin.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duraction:1, deley:1}}> 
            Bem-vindo a Home.
        </motin.div>
    )
}

export default Home
