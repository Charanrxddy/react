import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1 className="head">Namaste React using JS</h1>;
};

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React in JSX</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
