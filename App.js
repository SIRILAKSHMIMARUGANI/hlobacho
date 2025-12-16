import React from "react";
import ReactDOM from "react-dom/client";
const Title=<h1>hello siri!</h1>
const Heading1=()=>(
    <h1>this is first heading1</h1>
);
const Heading2=()=>(
    <div>
        <h1>hello siri</h1>
        <Heading1></Heading1>
        <Heading1 />
        {Heading1()}
        {Title}
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2/>)
