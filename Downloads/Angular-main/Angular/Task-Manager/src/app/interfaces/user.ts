export interface User {
	name? : string; 
	age? : number | undefined ; 
	gender? : string, 
	email? : string, 
	password? : string, 
	phone? : number, 
	address : {
		street? : string, 
		city? : string, 
		state? : string, 
		postalCode? : number | undefined 
	}
}