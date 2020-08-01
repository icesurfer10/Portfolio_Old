import React from "react";
import { Section } from "../section/Section";
import { SectionType } from "../section/SectionType";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Section sectionType={SectionType.Primary} />
      <Section sectionType={SectionType.Secondary} />
    </>
  );
};
