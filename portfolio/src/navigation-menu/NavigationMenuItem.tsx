import React from "react";

type NavigationMenuItemProps = {
  text: string;
};

interface INavigationMenuItemProps {
  text: string;
}

const NavigationMenuItem = ({ text }: NavigationMenuItemProps) => {
  return <p>{text}</p>;
};

export default NavigationMenuItem;
