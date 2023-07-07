import "../assets/sign-in-card.css";

export default function SignInCard() {

    return (
        <form action="/" method="POST" autoComplete="on">
            <div className="container sign in">
                <div className="title">
                    <h1 className="sign-h1 in">Sign in<br></br></h1>
                    <h3 className="sign-h3 in">View your profile details</h3>
                </div>
                <div className="email">
                    <label htmlFor="email"></label>
                    <input type="text" id="email" autoComplete="off" placeholder="Email"></input>
                </div>
                <div className="pw">
                    <label htmlFor="pw"></label>
                    <input type="password" id="pw" autoComplete="off" placeholder="Password"></input>
                </div>
                <div className="btn-submit">
                    <button type="submit" id="sign-submit" className="btn btn-default">Sign in</button>
                </div>
            </div>
        </form>
    )
}