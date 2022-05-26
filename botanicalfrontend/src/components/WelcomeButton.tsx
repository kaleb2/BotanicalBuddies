import { Welcome } from "../services/WelcomeService";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



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