import {get} from "./api.js";

const onMounted = () => {
    const accessToken = localStorage.getItem('access');
    if(!accessToken){
        window.location.href = 'login.html';
    }

    const posts = await get ('post/')
}



onMounted();