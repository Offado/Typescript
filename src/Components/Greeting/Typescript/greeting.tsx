import React from "react";


interface GreetingProps {
    name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>
        <h5>Bonjour, {name}!</h5>
    </div>
}

export default Greeting;