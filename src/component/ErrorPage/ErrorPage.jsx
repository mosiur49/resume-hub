import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-base-600 text-base-content text-center text-3xl  mt-28">
            <h1>Oops!</h1>
             <p>Sorry, an unexpected error has occurred.</p>
             <button className="bg-warning p-2"><Link to="/">Go back home</Link></button>
        </div>
    );
};

export default ErrorPage;