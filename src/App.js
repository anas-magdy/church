
import "./app.css"
import FormControl from "./coponents/FormControl";
import DisplayQRCode from "./coponents/DisplayQRCode";
import { Grid } from "@mui/material";
import ScanQRCode from "./coponents/ScanQRCode";
function App() {
  
  return (
   <>
   <div style={{backgroundImage:`url("/cherch.jpg")`,width:"100vw",height:"100vh",backgroundSize:"cover",
                backgroundPosition:"center"}}>
    <Grid container style={{backgroundColor:"rgba(0,0,0,.5)",width: "100%",height:"100%" }} justifyContent={"center"} alignItems={"center"}  flexDirection={"column"}>
        <FormControl></FormControl>
        <DisplayQRCode></DisplayQRCode>
        <ScanQRCode></ScanQRCode>
      </Grid>
   </div>
   </>
  );
}

export default App;
