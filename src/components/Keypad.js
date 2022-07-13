// Code Keypad Component Here
import react from "react";

function Keypad(){
    function userInput(){
        console.log('Entering password...')
    }
    return <input onChange={userInput} type='password' />
    
}
export default Keypad;