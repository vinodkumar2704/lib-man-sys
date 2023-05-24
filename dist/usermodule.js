import { memoryInstance } from "./RepositoryContract.js";
function userFind(id) {
    const users = memoryInstance.usersData;
    return users.find((u) => u.id === id);
}
function userRegistration(userName) {
    let id = "id" + Math.random().toString(16).slice(5);
    memoryInstance.saveUser({ name: userName, id: id });
    return id;
}
export function add(a, b) {
    return a + b;
}
export { userFind, userRegistration };
