import {Button} from "@arwes/core";
import {useState} from "react";


export const SignupForm = () => {

    const [user, setUser] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        let data = {};
        data[name] = value;
        setUser(prev => ({...prev, ...data}))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user));
    }

    return (
        <div style={{display: "flex", width: '100vw', height: '50vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
            <form style={{width: '20vw'}} >
                <label>Username</label>
                <input name='username' onChange={handleChange} />
                <label>Password</label>
                <input name='password' onChange={handleChange} />
                <label>Confirm Password</label>
                <input name='confirm-password' onChange={handleChange} />
                <div style={{justifyContent: 'space-between', flexDirection: 'row', display: 'flex'}} >
                    <Button onClick={onSubmit} >Signup</Button>
                </div>
            </form>
        </div>
    );
};
