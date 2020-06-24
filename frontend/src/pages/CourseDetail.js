import React,{useState,useEffect} from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
//import {categories,courses} from '../data'

import {useParams} from 'react-router-dom';

import ReactPlayer from 'react-player'
import axios from 'axios';

export default function CourseDetail(){
    let { name } = useParams();
  const backend = "http://127.0.0.1:8000/api/courses";

    const [course, setcourse] = useState()
   const [partPlaying, setvideoPlaying] = useState({completed:false,part:""});

   //part:course.parts[1],completed:false
   const [trouve, setTrouve] = useState(true)

    useEffect(() => {

      axios.get(`${backend}`)
        .then(res => {
          const courses = res.data["hydra:member"];

          //console.log(courses[0].name);
          //setcourses(courses);
           const search = courses.find((value) => value.name === name);
           if(search === undefined) {
            setTrouve(false);
             return
           }
           console.log(search)
           setcourse(search)

          setvideoPlaying({completed:false,part:search.parts[0]})

        })

        console.log(course)
      
     
    }, [])


    //const course = courses[0]




  



    function playNewVideo(part){
      console.log({...partPlaying,part})
      setvideoPlaying({...partPlaying,part})
    };

    function markeCurrentVideoAsViewed(videoState){
      //alert("Vous avez fini le cours " + videoState.playedSeconds);
      setvideoPlaying({...partPlaying,completed:true})
    }

    function onProgress(videoState){
     const {played} = videoState;

     if(played > 0.7 && !partPlaying.completed){
      markeCurrentVideoAsViewed(videoState);
    }

  }

  function currentVideoEndPlaying(){
    //alert("La video est fini ");
    const indexOfNextVideo = course.parts.indexOf(partPlaying.part) + 1;
    const nextPart = course.parts[indexOfNextVideo];

    if(nextPart){
      alert("On passe à la video suivante")
      setvideoPlaying({part:nextPart,completed:false})
    }else{
      alert("VOus venez de terminer la derniere video alors le cours est fini ! ")
    }

  }

  function test(){
    

  }

  

    return  !trouve ? <h1 className="text-center">Ce cours n'existe pas</h1>      : !course ? <h1 className="text-center">CHARGEMENT...</h1> :  <div>

    <div className="container my-5">   
        <div className="row mx-auto jumbotron">
        <div className="col-md-12" >
        <button onClick={test} className="btn btn-success">Boutton dcd</button>

      <h5>{course.name}</h5>
      <h6>{course.author.firstName} {course.author.lastName} , {course.author.profession} </h6>
         <p>{course.nb_students} {/*  étudiants suivent ce cours ! 👍👍 */}  </p>
      <p>Prix : {course.price} Fcfa</p>
      
      </div>

    <div className="col-md-8 ">

      

  

  <ReactPlayer url={partPlaying.part.url} controls={true} onProgress={onProgress} onEnded={currentVideoEndPlaying} />

   


    </div>
    
    <div className="col-md-4">
        {course.parts.map((part,index) =>
        <button style={{width:"100%"}} className="btn btn-dark  my-2" onClick={(e) => playNewVideo(part)} >
                <p> {partPlaying.part === part ? <i className="fa fa-pause pull-left" aria-hidden="true"></i> : <i className="fa fa-play pull-left"></i>} <img className="pull-left" height={30} width={30} src={part.poster} alt=""/> 
 {index+1} -  {part.name}</p>

        </button>

           

         )}
       
    
    </div>
</div>
</div>
    
    </div>
}