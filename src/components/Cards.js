import React, { useState } from 'react';
import Card from "./Card";
const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;

    const [likedCourses,setLikedCourses]=useState([]);
   
    function getCourses(){
        if(category=='All')
        {
            let allCourses=[];
            Object.values(courses).forEach( (arr)=>{
                allCourses.push(...arr);
            })
            return allCourses;
        }
        else
        {
            return courses[category];
        }
    }
  return (
    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center  min-h-[50vh] gap-4 mb-4'>
        {
            getCourses().map((course)=> {
                return(<Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>);
                })
        }
    </div>
  );
}

export default Cards;