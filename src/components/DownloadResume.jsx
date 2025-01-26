import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadResume = ()=>{
        return (
            <Button
               variant="contained"
               color="primary"
               startIcon={<DownloadIcon />}
               href="../images/AliRaza.Resume.pdf"
               download="AliRaza.Resume.pdf"
            >
              Download Resume
            </Button>
        )
}


export default DownloadResume