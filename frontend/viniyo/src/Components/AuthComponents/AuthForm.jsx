import React, { useState } from 'react'
import './AuthForm.css'
import Login from './Login';
import Signup from './Signup';



function AuthForm(){
    const [taboption, setTabOption] = useState('1');

    const handleTabChange = (e, newval) => {
        setTabOption(newval)
    }
    return(
        <div>
        <div className="container">
    <div className="frame">
        <div className="nav">
            <ul className="links" value={taboption}>
                <li className="signin-active" ><a className="btn">Existing User</a></li>
                <li className="signup-inactive"><a className="btn">New User</a></li>
            </ul>
        </div>
        <div ng-app ng-init="checked = false">
            <form class="form-signin" action="" method="post" name="form" value="1"> 
           
            </form>
            </div>
       
    </div> <a id="refresh" value="Refresh" onClick="history.go()"> <svg class="refreshicon" version="1.1" id="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 322.447 322.447"  xml:space="preserve">
            <path d="M321.832,230.327c-2.133-6.565-9.184-10.154-15.75-8.025l-16.254,5.281C299.785,206.991,305,184.347,305,161.224 c0-84.089-68.41-152.5-152.5-152.5C68.411,8.724,0,77.135,0,161.224s68.411,152.5,152.5,152.5c6.903,0,12.5-5.597,12.5-12.5 c0-6.902-5.597-12.5-12.5-12.5c-70.304,0-127.5-57.195-127.5-127.5c0-70.304,57.196-127.5,127.5-127.5 c70.305,0,127.5,57.196,127.5,127.5c0,19.372-4.371,38.337-12.723,55.568l-5.553-17.096c-2.133-6.564-9.186-10.156-15.75-8.025 c-6.566,2.134-10.16,9.186-8.027,15.751l14.74,45.368c1.715,5.283,6.615,8.642,11.885,8.642c1.279,0,2.582-0.198,3.865-0.614 l45.369-14.738C320.371,243.946,323.965,236.895,321.832,230.327z"/ > </svg> </a>
</div>
</div>
    )
}

export default AuthForm