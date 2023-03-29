import React from "react";
import Button from "../Overview.js/Button";
import DataBoxes from "../Overview.js/DataBoxes";
import source from "../../assets/icon-source.svg";

import { FlexWrapper, StyledButtonBox, StyledOverview, StyledPlanetImg, StyledPlanetText, StyledPlanetWiki } from "../Overview.js/StyledOverview";

const Surface = ({ planet, img, size, imgSecondary, position }) => {
  return (
    <StyledOverview>
      <FlexWrapper>
        <StyledPlanetImg position={position}>
          <img src={img} alt={planet.name} width={size} height={size} />
          <div className="img-secondary">
            <img src={imgSecondary} alt="" />
          </div>
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
            <Button number="01" text="overview" />
            <Button number="02" text="internal structure" />
            <Button number="03" text="surface geology" isActive={true} />
          </StyledButtonBox>
        </StyledPlanetText>
      </FlexWrapper>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Surface;
