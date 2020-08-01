import React from "react";
import "./Section.css";
import { SectionType } from "./SectionType";

interface SectionProps {
  sectionType: SectionType;
}

export const Section: React.FC<SectionProps> = ({ sectionType }) => {
  return (
    <div className={"section " + SectionType[sectionType].toLowerCase()}>
      {}
    </div>
  );
};
