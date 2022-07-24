import React, { Component } from "react";
import './blog.css'
import Cards from './cards/cards'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import BlogNavbar from "./blognavbar";

export class Blog extends Component {

  render() {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
       <div>  
         {/* <BlogNavbar /> */}
       </div>
        <Cards />
      </motion.div>
    );
  }
}

export default Blog;
