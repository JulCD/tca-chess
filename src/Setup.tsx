import { useNavigate } from "react-router-dom";

export const Setup = () => {
    
      //Hooks and state at the top 

    const nav = useNavigate();
    
    return (
        <>
            <h3>
                Setup
            </h3>
            <button 
                className="btn btn-link"
                onClick={() => nav('./play')}
            >
                Start the Game
            </button>
        </>
    );
};