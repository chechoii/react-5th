import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
import { _PlanetPage } from "./pages/_PlanetPage.js";
import AvatarPage from "./pages/AvatarPage.js";




/* class syntax  */

// 1. PlanetItem

// 2. PlanetList => [children은 배열(virtualDOM을 담은)로 전달될 수 있다]

// 3. PlanetPage

/* function syntax  */




const container = document.getElementById('app');

if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage));
}


