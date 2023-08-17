export { default as electronics } from "./Images/electronics.jpg";
export { default as jewelry } from "./Images/jewelry.jpg";
export { default as mens_wear } from "./Images/mens_wear.jpg";
export { default as womens_wear } from "./Images/womens_wear.png";
export { default as order_success } from "./Images/order-success.jpg";

// This file exports all the files in the assests folder...
// Providing an index file for each folder makes exporting and importing neater. By default, index file in the root of any folder is visited when you try 
// to import from such folder. 
// i.e Say there is a file named 'apple.tsx' in a folder 'fruit' and 'fruit' folder has an index where 'apple.tsx' has been exported.
// Whenever you want to import 'apple' file, the usual way would have been to navigate to that file i.e import apple from  '../fruit/apple'
// But using this approach, the import looks like this => import {apple} from '../fruit'
// Subsequently, you can always import multiple files from that fruit folder like this => import {apple, oranges} from '../fruit'
