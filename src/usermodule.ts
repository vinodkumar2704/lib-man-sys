import { memoryInstance } from "./RepositoryContract.js";

function userFind(id:string){
    const users = memoryInstance.usersData;
    return users.find((u)=>u.id===id);
}

function userRegistration(userName:string) {
    let id: string = "id" + Math.random().toString(16).slice(5);
    memoryInstance.saveUser({ name: userName, id: id });
    return id;
}

export function add(a:number,b:number):number{
    return a+b;
}
export {userFind,userRegistration}