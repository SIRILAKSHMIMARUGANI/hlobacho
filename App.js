const heading=React.createElement("h1",{id:"raba"},"Hello world!");
const root=ReactDOM.createRoot(document.getElementById("root"));
const papaa=React.createElement("h2",{},"i am replaced by some element");
const papa=ReactDOM.createRoot(document.getElementById("papa"));

const parent=React.createElement("div",{id:"parent"},[(React.createElement("div",{id:"child1"},([React.createElement("h1",{id:"h1"},("this is h1")),(React.createElement("h2",{id:"h2"},("this is h2")))]),[React.createElement("div",{id:"child2"},[(React.createElement("h1",{id:"h1"},("this is h1"))),(React.createElement("h2",{id:"h2"},("this is h2")))])]))]);
const fruit=ReactDOM.createRoot(document.getElementById("fruit"));
fruit.render(parent);