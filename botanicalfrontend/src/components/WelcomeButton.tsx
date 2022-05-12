import { Welcome } from "../services/WelcomeService";



export function WelcomeButton()
{
    // const [submitted, setSubmitted] = useState(false);

    let response;

    const GetWelcomeMessage = () => {
        response = Welcome.getWelcome();
    }

    return(
        <div>
            <button onClick={GetWelcomeMessage}>
                Welcome
            </button>
            <p>{response}</p>
        </div>
    )
}