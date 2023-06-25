import React from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App(){
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  const [category,setCategory]=useState(filterData[0].title);
  useEffect(function(){
    async  function fetchData(){
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
       
        //save into variable
        setCourses(output.data);
        console.log(output.data);
        setLoading(false);
      }
      catch(error)
      {
        toast.error("something went wrong");
      }
    }
    fetchData();
  },[]);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <Filter filterData={filterData}  category={category} setCategory={setCategory}/>
        {
       loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
};

export default App;
