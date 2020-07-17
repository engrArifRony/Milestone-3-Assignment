// function feet to mile 

function feetToMile(feet){
    var mile = feet/5280;
    console.log(feet+" feet =");
    return mile;
}
console.log (feetToMile(20000)+" Mile");

// woodCalculator

function woodCalculator(chair,table,bed){
    var chair = chair * 1;
var table = table * 3;
var bed = bed * 5;
TotalWoodIsRequired = chair + table + bed;
return TotalWoodIsRequired
}
console.log("Total wood is required "+ woodCalculator(50,3,1)+ " CFT")


// // tinyFriend
function tinyFriend(name){
    var smallest=name[0];

    for(var i=0; i<name.length;i++){

        var length=name[i].length;

        if(length<name.length){
            smallest=name[i];
        }
    }
    return smallest;
}
var friendsName=tinyFriend(["Arif","Tahmina","Olaf","Mandy"]);
console.log(friendsName);

    
// brickCalculator

function brickCalculator(floor){
    console.log(floor)
    if(floor>0 && floor<=10 ){
        var brick=15*1000*floor;
        console.log(brick)
    }else if(floor>10 && floor<=20){
        var brick=12*1000*(floor-10)+150000;
        console.log(brick)
    }else if(floor>20){
        var brick = 10*1000*(floor-20)+150000+120000;
        console.log(brick)
    }
}
brickCalculator(30)
brickCalculator(55)
brickCalculator(15)
brickCalculator(20)
brickCalculator(10)


