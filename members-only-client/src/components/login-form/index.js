import {Button} from "@arwes/core";
import {useState} from "react";

export const LoginForm = () => {

    const [user, setUser] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        let data = {};
        data[name] = value;
        setUser(prev => ({...prev, ...data}))
    };

    const onLogin = (e) => {
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
                <div style={{justifyContent: 'space-between', flexDirection: 'row', display: 'flex'}} >
                    <Button onClick={onLogin} >Login</Button>
                    <Button>Signup</Button>
                </div>
            </form>
        </div>
    );
};
