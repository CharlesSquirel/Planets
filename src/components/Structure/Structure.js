import React from "react";
import Button from "../Overview.js/Button";
import DataBoxes from "../Overview.js/DataBoxes";
import source from "../../assets/icon-source.svg";
import {
  StyledWrapperFlex,
  StyledButtonWrapper,
  StyledOverview,
  StyledImg,
  StyledPlanetArticle,
  StyledWrapperWiki,
  StyledWrapperPlanet,
  StyledPlanetTitle,
  StyledPlanetDescription,
  StyledWikiText,
  StyledSourceIcon,
} from "../Overview.js/StyledOverview";

const Structure = ({ planet, size, img, planetColor }) => {
  const planetToNavigate = planet.name.toLowerCase();
  return (
    <StyledOverview>
      <StyledWrapperFlex>
        <StyledImg>
          <img src={img} alt={planet.name} width={size} height={size} />
        </StyledImg>
        <StyledPlanetArticle>
          <StyledWrapperPlanet>
            <StyledPlanetTitle>{planet.name}</StyledPlanetTitle>
            <StyledPlanetDescription>{planet.overview.content}</StyledPlanetDescription>
            <StyledWrapperWiki>
              Source:
              <StyledWikiText>
                <a href={planet.overview.source}>Wikipedia</a>
              </StyledWikiText>
              <span>
                <StyledSourceIcon src={source} alt="" />
              </span>
            </StyledWrapperWiki>
          </StyledWrapperPlanet>
          <StyledButtonWrapper>
            <Button number="01" text="overview" navigate={planetToNavigate !== "mercury" ? `/${planetToNavigate}/overview` : `/`} />
            <Button number="02" text="internal structure" isActive={true} planetColor={planetColor} navigate={`/${planetToNavigate}/structure`} />
            <Button number="03" text="surface geology" navigate={`/${planetToNavigate}/surface`} />
          </StyledButtonWrapper>
        </StyledPlanetArticle>
      </StyledWrapperFlex>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Structure;
