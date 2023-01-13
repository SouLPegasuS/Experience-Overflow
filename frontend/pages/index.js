import Feed from "../components/Feed";
// import Rightbar from "../components/Rightbar";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Navbar from "../components/Navbar";

export default function Home() {

  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectCompany, setSelectCompany] = useState("");

  return (
    <div>
      <Navbar />
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Feed />
          

          {/* <Rightbar /> */}

          <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300} sx={{ overflowY : "scroll", top : "63px", bottom : "0"}} >
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Atlassian" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Google" />
            </FormGroup>
            </Box>
          </Box>

        </Stack>
      </Box>
    </div>
  )
}
