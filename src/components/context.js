import {createContext, useReducer, useContext} from "react";
import { carritoReducer } from "./reducers";

const  Carrito = createContext();

const Context =({children}) =>{
    const productos = [
        {id: 1, nombre: "Polo 1", precio: 10, stock: 100, codigo: "001", categoria: "polo", img:"/img/polo.png"},
        {id: 2, nombre: "Pantalon 1", precio: 15, stock: 100, codigo: "002", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 3, nombre: "Polo 2", precio: 20, stock: 100, codigo: "003", categoria: "polo", img:"/img/polo.png"},
        {id: 4, nombre: "Pantalon 2", precio: 25, stock: 100, codigo: "004", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 5, nombre: "Polo 3", precio: 30, stock: 100, codigo: "005", categoria: "polo", img:"/img/polo.png"},
        {id: 6, nombre: "Pantalon 3", precio: 35, stock: 100, codigo: "006", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 7, nombre: "Polo 4", precio: 10, stock: 100, codigo: "007", categoria: "polo", img:"/img/polo.png"},
        {id: 8, nombre: "Pantalon 4", precio: 15, stock: 100, codigo: "008", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 9, nombre: "Polo 5", precio: 20, stock: 100, codigo: "009", categoria: "polo", img:"/img/polo.png"},
        {id: 10, nombre: "Pantalon 5", precio: 25, stock: 100, codigo: "010", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 11, nombre: "Polo 6", precio: 30, stock: 100, codigo: "011", categoria: "polo", img:"/img/polo.png"},
        {id: 12, nombre: "Pantalon 6", precio: 35, stock: 100, codigo: "012", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 13, nombre: "Polo 7", precio: 10, stock: 100, codigo: "013", categoria: "polo", img:"/img/polo.png"},
        {id: 14, nombre: "Pantalon 7", precio: 15, stock: 100, codigo: "014", categoria: "pantalon", img:"/img/pantalon.jpg"},
        {id: 15, nombre: "Polo 8", precio: 20, stock: 100, codigo: "015", categoria: "polo", img:"/img/polo.png"},
        {id: 16, nombre: "Pantalon 8", precio: 25, stock: 100, codigo: "016", categoria: "pantalon", img:"/img/pantalon.jpg"},
    ]

    const [carritoState, dispatch] = useReducer(carritoReducer,{
        productos: productos,
        carrito:[]
    });

    return <Carrito.Provider value={{carritoState, dispatch}}>{children}</Carrito.Provider>;
};
export default Context;


export const CarritoState=()=>{
    return useContext(Carrito);
}