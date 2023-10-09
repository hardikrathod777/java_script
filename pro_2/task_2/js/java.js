var season = '';
var month = '4';

if (month == 1 || month == 2 || month == 3 || month == 4) {
    season = "winter";
} else if (month == 5 || month == 6 || month == 7 || month == 8) {
    season = "summer";
} else if (month == 9 || month == 10 || month == 11 || month == 12) {
    season = "monsoon";
}

switch (season) {
    case 'winter':
       window.alert("curent seson is winter");
        break;
    case 'summer':
    window.alert("curent seson is summer");
        break;
    case 'monsoon':
    window.alert("curent seson is monsoon");
        break;
    default:
        break;
}