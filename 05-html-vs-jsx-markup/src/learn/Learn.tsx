import type { JSX } from "react";
import JSX_MARKup from "./JSX_MARKup";

function Learn():JSX.Element{
    return (
        <div className="learn">
            <Headline />
            <hr />
            <JSX_MARKup />
        </div>
    )
}

export default Learn;


function Headline():JSX.Element{
    const abbr = {
        html:'Hper Text Markup Language',
        jsx:{
            abbr:'Javascript eXtension for ECMAScript',
            text:"JSX"
        }
    }

    return(
        <h1>
            <abbr title={abbr.html}>HTML</abbr> vs
            <abbr title={abbr.jsx.abbr}> {abbr.jsx.text}</abbr> 마크업
        </h1>
    )
}