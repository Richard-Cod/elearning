import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
//import {courses} from '../data';

import axios from 'axios'

export default function Home(){
  const [courses, setcourses] = useState();
  const backend = "http://127.0.0.1:8000/api/courses";

  useEffect(() => {

    axios.get(`${backend}`)
      .then(res => {
        const courses = res.data["hydra:member"];
        console.log(courses);
        setcourses(courses)
      })
    
   
  }, [])
    
    return <div>

  <div  id="carouselExampleIndicators" class="carousel slide text-white" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  </ol>
  
  <div class="carousel-inner">
    <div style={{backgroundImage: `url(https://colorlib.com/preview/theme/webuni/img/bg.jpg)`,height:500}} class="carousel-item active">
      <div class="container mt-5">
      <h1>KENSITE</h1>
      <p class="lead text-muted">Bienvenue sur le site ,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat at, sed volupt.</p>
      <p>
        <Link class="btn btn-primary my-2">Voir tous les cours </Link>
        <Link class="btn btn-secondary my-2">Secondary ttt</Link>
      </p>
    </div>
    
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>







  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">

{!courses ? <h1>CHARGEMENT...</h1> : courses.map((course,index) => <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src={course.image} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="" />
            <div class="card-body">
              <p class="card-text">{course.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <Link type="button" class="btn btn-sm btn-outline-secondary" to={"cours/"+course.name}>Voir</Link>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div> )}
        


      </div>


    </div>
  </div>
    </div>
}