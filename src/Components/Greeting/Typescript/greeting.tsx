type GreetingProps = {
    name: string;
}

const Greeting = ( props: GreetingProps ) => {
    return <div>
        <h5>Bonjour, {props.name}!</h5>
    </div>
}

export default Greeting;