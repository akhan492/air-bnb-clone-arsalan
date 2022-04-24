import React from 'react'
import { Search, Globe, User } from 'react-feather';
import { motion, transform } from "framer-motion"
import "./SearchBar.css";

function SearchBar() {
  return (<>
  <motion.div className='header'
     initial={{ x: 300, opacity: 0,scale: 0 }}
     animate={{ x: 0, opacity: 1,scale: 1, transition: { duration: 0.5 } }}
     exit={{ x: -300, opacity: 0, scale: 0 }}
  
  
  >
            {/* <Link to='/'> */}
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            {/* </Link> */}
           
            <div className='header__center'>
                <input type="text" placeholder='Start your search' />
                <Search />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <Globe/>
                <User/>
                
            </div>
        </motion.div>

  
  </>
  )
}

export default SearchBar