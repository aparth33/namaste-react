import React from 'react';
import  ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById("root"));
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"This is a h1 tag"),React.createElement("h2",{},"This is a h2 tag")]))
root.render(parent);