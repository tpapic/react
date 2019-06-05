import Register from "./views/register";
import Login from "./views/login";

import CustomerList from "./views/customers/index";
import CustomerCreate from "./views/customers/create";

import BillsList from "./views/bills/index";
import BillCreate from "./views/bills/create";
import BillItems from "./views/bills/items";

import ItemCreate from "./views/items/create"


const routes = [
  {
    name: "Register",
    path: "/register",
    component: Register
  },{
    name: "Login",
    path: "/login",
    component: Login
  },{
    name: "CustomerList",
    path: "/",
    component: CustomerList
  },{
    name: "CustomerCreate",
    path: "/customers/create",
    component: CustomerCreate
  },{
    name: "BillList",
    path: "/customers/:customerId/bills",
    component: BillsList
  },{
    name: "BillCreate",
    path: "/customers/:customerId/bills/create",
    component: BillCreate
  },{
    name: "BillItems",
    path: "/customers/bills/:billId/items",
    component: BillItems
  }, {
    name: "ItemCreate",
    path: "/customers/bills/:billId/items/create",
    component: ItemCreate
  },
];

export default routes;