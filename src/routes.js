import Register from "./views/register";
import Login from "./views/login";

import CustomerList from "./views/customers/index";
import CustomerCreate from "./views/customers/create";

import BillsList from "./views/bills/index";
import BillEdit from "./views/bills/edit";


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
    name: "BillEdit",
    path: "/bills/:billId/edit",
    component: BillEdit
  },
];

export default routes;