import React from "react";
import NavigationMenuItem from "./NavigationMenuItem";
const copy = require("./NavigationMenu.content.json");

const NavigationMenu = () => (
  <nav>
    <div>
      <NavigationMenuItem text={copy.menu.home} />
      <NavigationMenuItem text={copy.menu.about} />
      <NavigationMenuItem text={copy.menu.work} />
      <NavigationMenuItem text={copy.menu.contact} />
    </div>
  </nav>
);

export default NavigationMenu;
 NavigationMenu;