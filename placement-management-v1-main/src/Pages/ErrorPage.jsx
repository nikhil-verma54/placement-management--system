import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css"

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div
            id="gc-error-page"
        >
            <div className="gcer-main">
                <div className="gcer-text">
                    <h1 className="gcer-heading">4</h1>
                    <h1 id="gcer-0">0</h1>
                    <p id="gcer-p">{error.statusText || error.message}</p>
                    <h1 className="gcer-heading">4</h1>
                    <Link
                        style={{
                            textDecoration: "none",
                            position: "absolute",
                            bottom: "3vw",
                            padding: "0.7vw",
                            borderRadius: "0.6vw",
                            border: "none",
                            fontSize: "1vw",
                            backgroundImage:
                                "linear-gradient(to left, rgb(96, 169, 237) , rgb(255, 181, 250))",
                            color: "white"
                        }}

                    >
                        Back to home
                    </Link>

                </div>
                <p id="gcer-res-p">{error.statusText || error.message}</p>
            </div>
        </div>

    );
}