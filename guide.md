**Installation of Angular CLI** 
We can install the angular cli using ```npm i @angular/cli -g``` or ```npx``` to avoid having global installation. 
*To check the version we can use `ng --version` or `ng version`.*

**To create an empty workspace** 
* Go to some project directory. 
* ng new `ecom-app` --createApplication=false // this is for creating a new project with empty workspace. 
* Go to the ecom-app directory and install the packages using `npm i`
* To create a new application we can use `ng g app ecom-app`

**To create a project workspace** 
* using ng new ecom-app
* Go the ecom-app directory and get started with it. 

**Project walkthrough** 

* tsconfig.json : This is ts configuration file which learns during the development and contains all the configurations. 

* tsconfig.spec.json : In angular we write application related code and unit tests, all the unit tests which will be generated using cli automatically and the spec.json file is used by all the test files, All the unit test files are generated in spec.ts file. 

**Mono-Repo**
We can create multiple applications in a single repo and deploy from the same repo, easy to share codes between different applications within the same projects. 

*In angular everything is a class*

*if we change the prefix = app --> hotel(or any name we desire), then we need to do the same in index.html(app-root --> hotel-root) and angular.json file(prefix = app -> hotel) and then restart the shell again. We can also change the prefix to any name while creating the application using --prefix=whateverNameWeWant*


**Component generation** 
let's say we want to create a component called Rooms, use ``` ng generate component rooms ```,
a new directory is created inside the app directory named rooms, all the codes related to rooms written here. Take the selector from the rooms.component.ts and feed it to app.component.html to see this component in action. 


**Template Binding**
* Interpolation Binding : declare a variable name in rooms.component.ts file and then use that variable name in rooms.component.html file <tag> I am using {{variableFromComp.tsFile}}</tag>, and this shows up in the application page. 

* Property Binding :  <div [innerText] = "numberOfRooms"></div> <!-- innerText and others should be valid html elements -->

* Event Binding : for buttons or events 
<button (click) = "toggle()"> Toggle> </button> and this toggle function should be defined in rooms.component.ts file 

**Directives** 
*Can change the behaviour and appearance of the DOM* 
*Don't have templates* 

* Structural directives 
* Attribute directives 

**Builtin Directives** 
*ngIf :  example below 
```
<div *ngIf="!hideRooms">
	<h4>Available Rooms : {{rooms.availableRooms}}</h4>
	<h4>Booked Rooms : {{rooms.bookedRooms}}</h4>
</div>
```

*ngFor : example below 
```
<table border = "2">
		<tr>
			  <th>Index</th>
			  <th>Room Type</th>
		      <th>Amenities</th>
		      <th>Price</th>
		      <th>Available</th>
		      <th>Check-In Time</th>
		      <th>Check-Out Time</th>
		      <th>Photos</th>
		</tr>
		<tr *ngFor="let room of roomsList; let e = even; let o = odd; let i = index; ">
		  <td>{{i+1}} : {{o ? 'Even' : 'Odd'}}</td>
	      <td>{{ room.roomType }}</td>
	      <td>{{ room.amenities }}</td>
	      <td>{{ room.price }}</td>
	      <td>{{ room.available ? 'Yes' : 'No' }}</td>
	      <td>{{ room.checkInTime | date:'short' }}</td>
	      <td>{{ room.checkOutTime | date:'short' }}</td>
	      <td>
	        <img *ngIf="room.photos" 
		        [src]="room.photos" 
		        alt="{{ room.roomType }} Photo" 
		        width="150"
	        >
	      </td>
		</tr>
</table>
```

* Meaning of `*` in the directives : the ones with * are stuctured directives and they can modify(add, remove and others) DOM element, if we expand the *ngFor, it will be as follows : 
```
<ng-template ngFor let-item [ngForOf]="items">
  <!-- code -->
</ng-template>
``` 

with * sign it is as below , 

```
<div *ngFor = "let item of items; let i = index; "> 
<!-- code -->
</div> 
``` 
* The ones without `*` are able to add some logic to the code, but can't add or remove the element to/from the DOM. 
* One more structured directive is *ngSwitch, it is used like, 
```
<div [ngSwitch]="value">
  <div *ngSwitchCase="'user'">Content for case 1</div>
  <div *ngSwitchCase="'admin'">Content for case 2</div>
  <div *ngSwitchDefault>Default content</div>
</div>

```

**ngClass and ngStyle** 
Both ngClass and ngStyle are Angular directives used for dynamically applying CSS classes and styles. 
```
isSpecial: boolean = true;
<div [ngClass]="{ 'special-class': isSpecial }">This div has a special class</div>


textColor: string = 'red';
<div [ngStyle]="{ 'color': textColor }">This text has a dynamic color</div>

``` 

