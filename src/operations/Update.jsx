import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Update = () => {

  const [id,setId]=useState(0);
  const [ename,setEname]=useState("");
  const [email,setEmail]=useState("");
  const [emobile,setEmobile]=useState("");

  const history=useNavigate();//useful for navigating without <Link></Link>

  const handleUpdate=async(e)=>{
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5500/api/v1/employee/${id}`,
      {ename,email,emobile,});
      history("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{ //for geting the value which was stored in the local storage
    setId(localStorage.getItem("id"));
    setEname(localStorage.getItem("ename"));
    setEmail(localStorage.getItem("email"));
    setEmobile(localStorage.getItem("emobile"));
  },[]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Paper sx={{ width: "50vw" }} className="p-5 mt-5">
        <h2>Update</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={ename}
            onChange={(e)=>setEname(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input type="email" className="form-control" value={emobile}
            onChange={(e)=>setEmobile(e.target.value)}/>
          </div>

          <button type="submit" className="btn btn-primary mx-2"
          onClick={handleUpdate}>
            Update
          </button>
          <Link to="/">
            <button className="btn btn-success mx-2"> Back </button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};
