import '../assets/sign-up-card.css';

export default function SignUpCard() {

    return (
        <form action="/" method="POST" autoComplete="on">
            <div className="container sign up">
                <div className="title up">
                    <h1 className="sign-h1 up">Sign up<br></br></h1>
                    <h3 className="sign-h3 up">Join now to have your own profile!</h3>
                </div>
                <div className="name">
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" autoComplete="off" placeholder=""></input>
                </div>
                <div className="age">
                    <label htmlFor='age'>Age</label>
                    <input type="text" id="age" autoComplete="off" placeholder=""></input>
                </div>
                <div className="gender">
                <label htmlFor='gender'>Gender</label>
                    <input type="text" id="gender" autoComplete="off" placeholder=""></input>
                </div>
                <div className="ph">
                    <label htmlFor='ph'>Phone Number</label>
                    <input type="number" id="ph" autoComplete="off" placeholder="(+00) 00000 00000"></input>
                </div>
                <div className="email">
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" autoComplete="off" placeholder="abc1@xyz.com"></input>
                </div>
                <div className="pw">
                    <label htmlFor='pw'>Password</label>
                    <input type="password" id="pw" autoComplete="off" placeholder="Password"></input>
                </div>
                <div className="con-pw">
                    <label htmlFor='con-pw'>Confirm Password</label>
                    <input type="password" id="con-pw" autoComplete="off" placeholder="Password"></input>
                </div>
                <div className="btn-submit">
                    <button type="submit" id="sign-submit" className="btn btn-default">Sign up</button>
                </div>
            </div>
        </form>
    )
}