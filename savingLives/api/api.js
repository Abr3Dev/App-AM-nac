import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.15.5:8083/api',
    headers: {
        'Content-Type':'application/json; charset=UTF-8',
},
});

// const apiVideo = axios.create({
//     baseURL : 'http://192.168.15.5:8083/api',
    
//     responseType= 'blob'
// })

export default api;

// export const fetchUserLogin = async (login, senha) =>{
//     return axios.get(`http://localhost:8083/api/doandovidas/user/123/123`);
//     // const resp = await fetch(`http://localhost:8083/api/doandovidas/user/${login}/${senha}`);
//     // const results = await resp.json();
//     // console.log(results);
// } 

// export const fetchUserSub = async (nome, cpf, email, dNasc, sexo, senha) =>{
//     await fetch(`http://192.168.15.5:8083/api/doandovidas/user/123/123`).then(resp =>{
//         console.log(resp);
//     })
// }

// http://localhost:8081/api/doandovidas/register   192.168.15.5