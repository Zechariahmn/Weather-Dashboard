//Set up the API key
var APIKey="acf653f3a78c775c8cd26496b7d08352";

//Declare a variable to store the searched city
let city="";

// variable declaration
let searchCity = $("#search-city");
let searchButton = $("#search-button");
let clearButton = $("#clear-history");
let currentCity = $("#current-city");
let currentTemperature = $("#temperature");
let currentHumidty= $("#humidity");
let currentWSpeed=$("#wind-speed");
let currentUvindex= $("#uv-index");
let sCity=[];

// searches the city to see if it exists in the entries from the storage
function find(c){
    for (let i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}