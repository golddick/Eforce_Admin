import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post('https://project-e-force-backend-v2.onrender.com/api/v1/authentication/login?type=vendor', userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload:res.data});
        console.log("Login response:", res.data); // Log the response
        return res.data; // Return the response data
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload:err})
        throw err; 
    }
    
}



export const OrgLogin = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post('https://project-e-force-backend-v2.onrender.com/api/v1/authentication/login?type=user', userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload:res.data});
        console.log("Login response:", res.data); // Log the response
        return res.data; // Return the response data
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload:err})
        throw err; 
    }
    
}

