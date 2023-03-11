import React from "react";
import Button from "./Button";
import { StyledButtonBox, StyledOverview, StyledPlanetImg, StyledPlanetText, StyledPlanetWiki } from "./StyledOverview";
import source from "../../assets/icon-source.svg";

const Overview = ({ planet, img }) => {
  return (
    <StyledOverview>
      <StyledPlanetImg>
        <img src={img} alt={planet.name} />
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
          <Button number="01" text="overview" isActive={true} />
          <Button number="02" text="internal structure" />
          <Button number="03" text="surface geology" />
        </StyledButtonBox>
      </StyledPlanetText>
    </StyledOverview>
  );
};

export default Overview;
