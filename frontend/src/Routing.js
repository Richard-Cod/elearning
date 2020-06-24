import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import CoursesAdmin from './crud_cours/liste';


export default function Routing(props){
    return <Router>

        <Navbar />

        <Switch>

          <Route exact path="/">
                <HomePage />
          </Route>
          <Route exact path="/contact">
                <ContactPage />
          </Route>
          <Route exact path="/cours/:name">
                <CourseDetail />
          </Route>

          <Route exact path="/ad/cours/"> 
          <CoursesAdmin/>
          </Route>
         
        </Switch>


        {/*props.children*/}

        <Footer />

    </Router>
}