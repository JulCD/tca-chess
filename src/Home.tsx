import { useNavigate } from "react-router-dom";

export const Home = () => {

  //Hooks and state at the top 

    const nav = useNavigate();

    return (
        <>
            <h3>
                Home
            </h3>
            <button 
                className="btn btn-secondary" 
                onClick={() => nav('./setup')}
            >
                Play
            </button>
        </>
    );
};