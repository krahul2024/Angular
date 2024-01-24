

export interface Room {
	availableRooms? : number,  
	bookedRooms? : number, 
	totalRooms? : number, 
}


export interface RoomsList {
	roomType? : string, 
	amenities? : string, 
	price? : number, 
	photos? : string, 
	available? : boolean, 
	checkInTime? : Date, 
	checkOutTime? : Date, 
	rating? : number, 
}