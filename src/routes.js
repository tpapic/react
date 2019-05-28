import CustomerList from "./views/customers/index";
import CustomerCreate from "./views/customers/create";


const routes = [
{
	name: "CustomerList",
	path: "/",
	component: CustomerList
},{
	name: "CustomerCreate",
	path: "/customers/create",
	component: CustomerCreate
}];

export default routes;