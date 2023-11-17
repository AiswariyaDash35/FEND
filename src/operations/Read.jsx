import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Read = () => {

  const [data,setData]=useState([]);

  const getData=async()=>{
    try{
    const response=await axios.get("http://localhost:5500/api/v1/employee/");//https is not used as it requires certificate
    setData(response.data)
    }
    catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:5500/api/v1/employee/${id}`);
    getData();
  }

  const setToLocalStorage=(id,ename,email,emobile)=>{ //stored in the local storage to give to the Update
    localStorage.setItem("id",id);
    localStorage.setItem("ename",ename);
    localStorage.setItem("email",email);
    localStorage.setItem("emobile",emobile);
  }


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              Name
            </th>
            <th className="text-center" scope="col">
              Email
            </th>
            <th className="text-center" scope="col">
              Mobile
            </th>
            <th className="text-center" scope="col" colSpan="2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((eachData)=>{
              return(
                <tr key={eachData._id}>
                  <td className="text-center">{eachData.ename}</td>
                  <td className="text-center">{eachData.email}</td>
                  <td className="text-center">{eachData.emobile}</td>
                  <td className="text-center">
              <Link to="/update" onClick={()=>{
                setToLocalStorage(eachData._id,eachData.ename,eachData.email,eachData.emobile)
              }}>
                <button className="btn btn-success me-2">Update</button>
              </Link>
              <button className="btn btn-danger" onClick={()=>handleDelete(eachData._id)}>Delete</button>
            </td>
          </tr>
              );
            })
          }
          
        </tbody>        
      </table>     
    </>
  );
};
