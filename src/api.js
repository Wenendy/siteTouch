import axios from 'axios';

const api = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDet29QBC-MfeemCF1GumzksrCG1_ewayU',

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})

export default api