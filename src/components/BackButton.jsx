import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    return(
        <Button onClick={()=> navigate(-1)} variant="solid">
            Volver 
        </Button>
    )
}

export default BackButton;