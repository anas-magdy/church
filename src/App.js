import { Button, Grid } from "@mui/material";
import { useState } from "react";
import {Autocomplete} from "@mui/material";
import {TextField} from "@mui/material";
import "./app.css"

function App() {
  const churchOptions=["القديس مارمرقس الرسول","العذراء مريم","العذراء مريم الكتدرائية","السيدة العذراء والأقباط الأبرشية"]
  const [formData,setFormData]=useState({fullName:"",nationalID:"",church:"",phoneNumber:""})
  const handelChange=(e)=>{
    setFormData(
      {
        ...formData,
        [e.target.name] : e.target.value   
      }
     
    )
  }
  return (
   <>
   <div style={{backgroundImage:`url("/cherch.jpg")`,width:"100vw",height:"100vh",backgroundSize:"cover",
                backgroundPosition:"center"}}>
    <Grid container style={{backgroundColor:"rgba(0,0,0,.5)",width: "100%",height:"100%" }} justifyContent={"center"}>
      <Grid item lg={6} md={7} sm={9} xs={10} style={{backgroundColor:"rgba(0,0,0,.5)",paddingTop:"10vh",display:"flex", justifyContent:"center", paddingRight:"30px"}} >
        <form >
            <Grid container spacing={2} justifyContent={"start"}>
              <Grid item xs={12} sm={12} md={6}>
                <label className="labels">Full Name :</label>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <input type="text" value={formData.fullName} name="fullName" onChange={(e)=>{handelChange(e)}}></input>
              </Grid>
          {/* ///////////////////////////////////////// */}
              <Grid item xs={12} sm={12} md={6}>
                <label className="labels">National ID :</label>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <input type="text" value={formData.nationalID} name="nationalID" onChange={(e)=>{handelChange(e)}}></input>
              </Grid>
          {/* ///////////////////////////////////////// */}
              <Grid item xs={12} sm={12} md={6}>
                <label className="labels">Church :</label>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
              <Autocomplete
                className="Autocomplete"
                options={churchOptions}
                  id="controlled-demo"
                  value={formData.church}
                  name="church" onChange={(e)=>{handelChange(e)}}
                  renderInput={(params) => (
                    <TextField {...params} label="controlled" variant="standard" />
                  )}
                />
              </Grid>
          {/* ///////////////////////////////////////// */}
              <Grid item xs={12} sm={12} md={6}>
                <label className="labels">Phone Number :</label>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
              <input type="text" value={formData.phoneNumber} name="phoneNumber" onChange={(e)=>{handelChange(e)}}></input>
              </Grid>
          {/* ///////////////////////////////////////// */}
              <Grid item xs={12} justifyContent={"center"} display={"flex"}>
                <button type="submit" variant="outlined"  className="submitButton">Submit</button>
              </Grid>

            </Grid> 
        </form>
      </Grid>
    </Grid>
   </div>
   </>
  );
}

export default App;
