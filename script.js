var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");

 console.log(color2);


window.addEventListener("load",function(){
    body.style.background =  "linear-gradient(to right ," 
	+ color1.value +"," 
	+ color2.value +")";
	css.textContent = body.style.background;

})

function setGradient(){
   body.style.background = "linear-gradient(to right ," 
	+ color1.value +"," 
	+ color2.value +")";

	css.textContent = body.style.background;

}


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);


// background:linear-gradient(to right ,brown,yellow,blue,red,grey);


let letters = [23,20,31];
let sum = 0;
let leee = [];
leee.push()
letters.forEach(function(item,index){

sum+=item;
console.log("element:" + (Number(item) + 2));
console.log(`index :${index}`);
leee.push((Number(item) + 2));

})

const mapV = letters.map((item)=>item *2)
console.log(letters);
console.log(mapV);




let animals = [{name:"dog",age:6,breed:"bulldog"}
              ,{name:"riendeeer",age:3,breed:"bask"}
              ,{name:"mouse",age:1,breed:"boon"}];




let animalReduce = animals.reduce((acc,element)=>{
		return acc += element.age},2);

let animalFilter = animals.filter(element =>element.age > 2 && element.name ==="dog");



let animalMap = animals.map((element,index)=>` ${index + 1}.${element.name} is an animal`);

































