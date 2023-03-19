import React from "react";
import Button from "./Button";
import { FlexWrapper, StyledButtonBox, StyledOverview, StyledPlanetImg, StyledPlanetText, StyledPlanetWiki } from "./StyledOverview";
import source from "../../assets/icon-source.svg";
import DataBoxes from "./DataBoxes";

const Overview = ({ planet, img, size, planetColor }) => {
  return (
    <StyledOverview>
      <FlexWrapper>
        <StyledPlanetImg>
          <img src={img} alt={planet.name} width={size} height={size} />
        </StyledPlanetImg>
        <StyledPlanetText>
          <div className="planet-text-box">
            <h2 className="planet-title">{planet.name}</h2>
            <p className="planet-desc">{planet.overview.content}</p>
            <StyledPlanetWiki>
              Source:
              <span className="wiki-text">
                <a href={planet.overview.source}>Wikipedia</a>
              </span>
              <span>
                <img className="source-icon" src={source} alt="" />
              </span>
            </StyledPlanetWiki>
          </div>
          <StyledButtonBox>
            <Button number="01" text="overview" isActive={true} planetColor={planetColor} />
            <Button number="02" text="internal structure" />
            <Button number="03" text="surface geology" />
          </StyledButtonBox>
        </StyledPlanetText>
      </FlexWrapper>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Overview;
