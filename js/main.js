var year=parseInt(prompt("Enter the year"));
var years=[];
var leepYears=[];
		
function allYears(year){
	for(i=year;i<=2023;i++){
		years.push(i)
	}
	console.log(years)
	allLeepYears()
}

function allLeepYears(){
	for(i=0;i<years.length;i++){
		if(years[i]%4==0){
			leepYears.push(years[i])
		}
	}
	console.log(leepYears)
}

allYears(year);