import { useParams, Link } from "react-router-dom";
import Participante from "./pages/Participante";
import Cobrador from "./pages/Cobrador";
import NotFound from "./NotFound";

const RolePage = () => {
  const { type } = useParams();
//  console.log("Tipo detectado:", type); // <-- Muestra qué recibe

  return (
    <>
      {/* Enlaces para navegar */}
      <nav> 

         <ul style={{  display: "none"  } }>
          <li><Link to="/role/participante">Ir a Participante</Link></li>
          <li><Link to="/role/cobrador">Ir a lCobrador</Link></li>
        </ul>
      </nav>
      {/* Renderizado condicional según la URL */}
      {type === "participante" && <Participante />}
      {type.toLowerCase() === "cobrador" && <Cobrador />}
      {!["participante", "cobrador"].includes(type.toLowerCase()) && <NotFound />}
    </>
  );
};

export default RolePage;