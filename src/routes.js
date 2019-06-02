import CustomerList from "./views/customers/index";
import CustomerCreate from "./views/customers/create";
import CustomerEdit from "./views/customers/edit";
import Register from "./views/register";
import Login from "./views/login";


const routes = [
{
    name: "CustomerList",
    path: "/",
    component: CustomerList
},{
    name: "CustomerCreate",
    path: "/customers/create",
    component: CustomerCreate
},{
    name: "CustomerEdit",
    path: "/customers/edit",
    component: CustomerEdit
},{
    name: "Register",
    path: "/register",
    component: Register
},{
    name: "Login",
    path: "/login",
    component: Login
}
];

export default routes;