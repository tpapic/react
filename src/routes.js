import Register from "./views/register";
import Login from "./views/login";

import CustomerList from "./views/customers/index";
import CustomerCreate from "./views/customers/create";

import BillsList from "./views/customers/bills/index";
import BillCreate from "./views/customers/bills/create";
import BillItems from "./views/customers/bills/items";


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
  },
];

export default routes;