import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const CenterChatbox = () => {

  const [inputData , setInputData] = useState();
  const [suggestion , setSuggestion] = useState([]);

  const handleChange = (e) =>{
    setInputData(e.target.value);
  }

  useEffect(()=>{
    if(inputData.trim() !== "" && inputData.length != 0){

      axios.get(`http://localhost:4000/api/search?q=${inputData}`).then((res) => {
        setSuggestion(res.data)
      }).catch((err) => {
        console.log("some error fecthing data",err);
      })
    }
    else{
      setSuggestion([]);
    }
  

  },[inputData])

  

  return (
    <div className=" bg-[#F6F6F6] h-[680px] w-[800px] mt-[10px] rounded-3xl flex ">
        <div className=' h-full w-[280px] flex flex-col '>

            <div class=" searchBox flex justify-center" >
              <SearchIcon style={{height: "40px", width: "25px" , backgroundColor: "#E2EAF6" , marginTop: "15px", borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", borderTopRightRadius: "0", borderBottomRightRadius: "0", }} />
                <input type="text" placeholder="Search" className=" pl-[25px] mt-[15px]  h-[40px] w-[230px] rounded-tr-xl rounded-br-xl  text-slate-800 placeholder:text-slate-800 bg-[#E2EAF6] border-gray-300 focus:outline-none focus:border-transparent focus:ring-transparent" 
                  value={inputData} onChange={handleChange}/>
            </div>

          <div className=' chatBox h-[65px] w-[260px] ml-[10px] mt-[10px]  flex hover:bg-gray-200 transition-colors cursor-pointer bg-opacity-75 hover:rounded-lg'>

              <div className='h-[50px]  w-[50px] rounded-md mt-[7px] ml-[5px]'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s' className='h-full w-full object-cover rounded-md'/>
              </div>
              <div className='chatBoxRightSide'>
                <div className="header h-[30px] w-[210px] mt-[5px] ">
                  <span className=' text-slate-800 ml-[20px] mt-[10px] font-sans text-[19px] subpixel-antialiased font-medium '>Tom Jerry</span>
                </div>
                <div className="footer"></div>
              </div>
          </div>

        </div>

        <div className=' h-full w-[520px] bg-red-400'>

        </div>
    </div>
  )
}

export default CenterChatbox
