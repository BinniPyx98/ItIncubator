////////////////////////////////////////------Для задания №3-4-----///////////////////////////
var mySearch = document.getElementById('Search')
var fieldd = document.getElementById('inputData');

var SuperSum = document.getElementById('SuperSum');
var SuperSumData1 = document.getElementById('SuperSumData1');
var SuperSumData2 = document.getElementById('SuperSumData2');
function doSomething() {
    if (fieldd.value == 'Google') {
        alert('Yandex круче. Но это не точно');
    }
    else {
        alert(fieldd.value);
        alert(pats[0].name);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////------Для задания №5-----///////////////////////////
var pats = [
    { name: "Cat", age: 3 },
    { name: "Dog", age: 5 },
    { name: "Dinosaurs", age: 3000 }
];

//
mySearch.onclick = doSomething;
//////////////////////////////////////--------------Задание №6----------/////////////
SuperSum.onclick = superSu1;

function superSum(number1, number2) {
    number1 = Number(SuperSumData1.value);
    number2 = Number(SuperSumData2.value);

    var answer = number2 + number1;
    alert(answer);
}

function superSu1() {
    superSum(SuperSumData1.value, SuperSumData2.value);

}

/////////////////////----------------Задание №7---------------/////////////////////
var maxMin = document.getElementById('MaxMin');
maxMin.onclick = MaxMin;
function MaxMin() {
    var array = [-1, 2, 4, 11, 5, 3, 7, 6, 8];
    var min = array[0];
    var max = myFindMax(array);
    for (var i = 0; i < 9; i++) {

        if (array[i] < min) {
            min = array[i];
        }

    }

    setTimeout(() => alert(min + "," + " " + max), 3000);

}

function myFindMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


///////////////////////-----------------Задание № 8-------------///////////////////
var swap = document.getElementById('Swap');
swap.onclick = Swap;
function Swap() {
    let a = "XXX";
    let b = "YYY";

    // тут ваш код
    var z = b;
    b = a;
    a = z;

    console.log("a=", a); // то что было изначально в b
    console.log("b=", b); // то что было изначально в a
}