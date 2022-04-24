import React from "react";
import {Search} from "react-feather";
import "./Searchinput.css";
import {motion} from "framer-motion";
function SearchInput(){
  return (
    <>
      <motion.div className="search__section"
      //  initial={{ opacity: 0, scale: 0 }}
      //  animate={{ opacity: 1  , scale: 1, transition: { duration: 0.5 }  }}
      //  exit={{ opacity: 0 , scale: 0 }}
      >
      <div className="overlay">
        <div className="field">
          <label htmlFor="location">Location</label>
          <input id="location" placeholder="Where are you going?" />
        </div>

        <div className="field">
          <label>Check-in</label>
          <input placeholder="Add dates" />
        </div>

        <div className="field">
          <label>Check-out</label>
          <input placeholder="Add dates" />
        </div>

        <div className="field">
          <label>Guests</label>
          <span className="guestNumber">
            {/* <p> guests</p> */}
            <p className="empty">Add guests</p>
          </span>
        </div>
      
        <div className="search__icon">
        <button
        type="submit"
        
        aria-label="search places"
        >
        <Search />
        </button>
       
      </div>
      </div>
          </motion.div>
    </>
  );
}

export default SearchInput;
