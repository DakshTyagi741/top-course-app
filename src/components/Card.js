import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id))
    {
      setLikedCourses((prev)=>prev.filter((id)=>id!==course.id));
      toast.warning('like removed');
    }
    else
    {
      setLikedCourses((prev)=>[...prev,course.id]);
      toast.success('Liked successfully');
    }
  }
  return (
    <div className='w-[300px] bg-bgDark rounded-ms  overflow-hidden '>
        <div className='relative'>
            <img src={course.image.url}/>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                {
                  likedCourses.includes(course.id)?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>
                }
                    
                </button>
            </div>
        </div>
        <div className='p-4'>
          <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
          <p className='text-white mt-2 '>{course.description.substr(0,100)+'...'}</p>
        </div>
    </div>
  );
}

export default Card;