import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>

          {/* mt = marginTop | 2 = 2 x 8px */}
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            O e-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos os melhores
            profeissionais com total segurança e praticidade! São milhares de
            clientes satisfeitos por todo o país.
          </Typography>
        </Box>

        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
