import { useState} from "react";

function Input({views, date, likes, dislikes}){
    const [displayLikes, setLikes] = useState(likes)
    const [displayDislikes, setDislikes] = useState(dislikes)

    const boostLikes = () =>{
        setLikes(displayLikes => displayLikes + 1);
    }

    const boostDislikes = () =>{
        setDislikes(displayDislikes => displayDislikes + 1)
    }
    

    return(
        <>
            <p>{views} Views | Uploaded {date}</p>
            <p>
                <button onClick={boostLikes}>{displayLikes} 👍</button>
                <button onClick={boostDislikes}>{displayDislikes} 👎</button>
            </p>
        </>
    )
    }
    
    export default Input;