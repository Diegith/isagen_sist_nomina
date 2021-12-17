import axios from 'axios';
const userURL = 'http://localhost:4000/usuarios';
const permisosURL = 'http://localhost:4000/permisos';
const vacacionesURL = 'http://localhost:4000/vacaciones';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${userURL}/${id}`); // 'http://localhost:4000/usuarios';
}
export const addUser = async(usuarios) => {
    return await axios.post(userURL, usuarios);
}
export const editUser = async (id, user) => {
    return await axios.put(`${userURL}/${id}`, user);
}
export const deleteUser = async(id) => {
    return await axios.delete(`${userURL}/${id}`);
}


export const getHolidays = async (id) => {
    id = id || '';
    return await axios.get(`${vacacionesURL}/${id}`);
}
export const addHoliday = async(vacaciones) => {
    return await axios.post(vacacionesURL, vacaciones);
}
export const editHoliday = async (id, holiday) => {
    return await axios.put(`${vacacionesURL}/${id}`, holiday);
}
export const deleteHoliday = async(id) => {
    return await axios.delete(`${vacacionesURL}/${id}`);
}


export const getPermisos = async (id) => {
    id = id || '';
    return await axios.get(`${permisosURL}/${id}`);
}
export const addPermiso = async(permisos) => {
    return await axios.post(permisosURL, permisos);
}
export const editPermiso = async (id, permiso) => {
    return await axios.put(`${permisosURL}/${id}`, permiso);
}
export const deletePermiso = async(id) => {
    return await axios.delete(`${permisosURL}/${id}`);
}