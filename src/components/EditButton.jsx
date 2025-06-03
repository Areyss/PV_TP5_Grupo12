import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EditButton = ({ lu }) => {
  return (
    <Link to={`/alumnos/editar/${lu}`}>
      <Button
        size="sm"
        variant={"outline"}
      >
        Editar
      </Button>
    </Link>
  );
};

export default EditButton;