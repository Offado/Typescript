import React from "react";


const Greeting = ({ name }) => {
    return (
        <div className="greeting">
            <h5>Bonjour, {name}!</h5>
        </div>
    );
}

export default Greeting;