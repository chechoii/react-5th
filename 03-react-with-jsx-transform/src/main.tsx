// @ts-nocheck


import React, { createElement as h } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
// import Avatar from '../src/components/avatar/Avatar.js'

interface Props {
  name:string;
  status?:'offline' | 'online' | 'disturb' | 'await';
  size?:number;
}

// console.log( React.version );
// console.log( ReactDOM );

/* JSX Syntax */

function Avatar({ name, status = "offline", size = 64 }:Props):JSX.Element {
  let iconPath = "";
  let statusMessage = "";

  switch (status) {
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "disturb":
      iconPath = "/icons/status-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "await":
      iconPath = "/icons/status-await.svg";
      statusMessage = "자리비움";
      break;
  }
  const label = `${name} (${statusMessage})`;


  return (
    <li className="avatar">
      <figure aria-label={label} title={label}>
        <div className="cover">
          <img src={`/avatar/${name}.png`} alt="" />
        </div>
        <figcaption>
          <img src={iconPath} alt="" />
        </figcaption>
      </figure>
    </li>
  )
}

function AvatarPage():JSX.Element{

  return (
    <ul className="avatarList">
      <Avatar name="a" status="offline"/>
      <Avatar name="b" status="disturb"/>
      <Avatar name="c" status="await"/>
      <Avatar name="a" status="online"/>
      <Avatar name="b" status="online"/>
    </ul>
  )
}

const container = document.getElementById('app');


if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(<AvatarPage />);
}