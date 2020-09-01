

const Users = user =>{
    const {
        name,
        picture
    } = user;

    return {
        id : 1,
        name : name.first,
        picture : picture.large
    };
};

export const fetchUser = async () =>{
    const resp = await fetch('https://randomuser.me/api/');
    const userData = await resp.json();

    return  Users(userData.results[0]);
}