import { useState } from 'react';

export default function SignUpCard() {
    const initialValues = {
        name: '',
        age: '',
        gender: '',
        ph: '',
        email: '',
        pw: '',
    };

    const conPw = '';

    const[formval, setFormval] = useState(initialValues);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormval({ ...formval,[name]: value })
        console.log(formval);
    }
    
    const checkPw = (e) => {
        const pw = e.target;
        setTimeout(1000);
        if(conPw === pw) {
            console.log('same');
        }
        else {
            console.log('check pw');
        }
    }
    return (
        <form action="/" method="POST" autoComplete="on">
            <div className="container sign up">
                <div className="title up">
                    <h1 className="sign-h1 up">Sign up<br></br></h1>
                    <h3 className="sign-h3 up">Join now to have your own profile!</h3>
                </div>
                <div className="name">
                    <label htmlFor='name'>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        autoComplete="off" 
                        name='name'
                        value={formval.name}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="age">
                    <label htmlFor='age'>Age</label>
                    <input 
                        type="text" 
                        id="age" 
                        autoComplete="off" 
                        name="age"
                        value={formval.age}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="gender">
                <label htmlFor='gender'>Gender</label>
                    <input 
                        type="text" 
                        id="gender" 
                        autoComplete="off" 
                        name="gender"
                        value={formval.gender}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="ph">
                    <label htmlFor='ph'>Phone Number</label>
                    <input 
                        type="number" 
                        id="ph" 
                        autoComplete="off" 
                        placeholder="(+00) 00000 00000"
                        name="ph"
                        value={formval.ph}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="email">
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        autoComplete="off" 
                        placeholder="abc1@xyz.com"
                        name='email'
                        value={formval.email}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="pw">
                    <label htmlFor='pw'>Password</label>
                    <input 
                        type="password" 
                        id="pw" 
                        autoComplete="off" 
                        placeholder="Password"
                        name='pw'
                        value={formval.pw}
                        onChange={inputChange}>
                    </input>
                </div>
                <div className="con-pw">
                    <label htmlFor='con-pw'>Confirm Password</label>
                    <input 
                        type="password" 
                        id="con-pw" 
                        autoComplete="off" 
                        placeholder="Password"
                        name="conPw"
                        value={conPw}
                        onChange={checkPw}>
                    </input>
                </div>
                <div className="btn-submit">
                    <button type="submit" id="sign-submit" className="btn btn-default">Sign up</button>
                </div>
            </div>
        </form>
    )
}