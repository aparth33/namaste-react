/**
 * <div id="parent">
 * <div id="child">
 * <h1>This is a h1 tag</h1>
 * <h2>This is a h2 tag</h2>
 * </div>
 * </div>
 */

// const heading=React.createElement("h1",{},"Hello World from React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is a h1 tag"),React.createElement("h2",{},"This is a h2 tag")]))
console.log(parent)
root.render(parent);