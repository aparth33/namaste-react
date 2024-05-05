import React from 'react';
import  ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById("root"));
// const heading=<h1 id='heading' className='heading' tabIndex="5">This is a heading</h1>;
const Title=()=><h1>This is Title component</h1>
const HeadingComponent=()=>{
    return (<div>
        {Title()}
        <Title/>
        <Title></Title>
    <h1>This is a HeadingComponent</h1>
    </div>);
}
// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"This is a h1 tag"),React.createElement("h2",{},"This is a h2 tag")]))
root.render(<HeadingComponent/>);