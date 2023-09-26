// import { Grid } from "@mui/material";
// import React from "react";
// import TabelasLivros from "../componentes/table";
// import ImgBiblioteca from "../public/assets/Biblioteca.jpg";

// const ImgBackground =
//   require("../public/assets/biblioteca-magica.avif") as string;
// const Livros: React.FC = () => {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         height: "100vh",
//         padding: "0 5rem ",
//         backgroundColor: "#4253b1",
//       }}
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Grid>
//         <Grid item>
//           <TabelasLivros />
//         </Grid>
//       </Grid>
//     </Grid>
//     // <div>
//     //   <img src={ImgBackground}>Hello World</img>
//     // </div>
//   );
// };
// export default Livros;
import { Grid } from "@mui/material";
import React from "react";
import TabelasLivros from "../componentes/table";
import ImgBackground from "../public/assets/biblioteca-magica.avif";

const Livros: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ImgBackground})`,
        backgroundSize: "cover",
        //backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <TabelasLivros />
        </Grid>
      </Grid>
    </div>
  );
};

export default Livros;
