

import Joke from "../joke";

// returns a JSX.Element 
function ChuckJokes(joke: string) : JSX.Element {

    return (
        <>
            <p>{joke}</p>
        </>
    )
}

export default ChuckJokes;