// introduncing the switch statement in js 

function getdayname(dayname)
{
    switch (dayname) {
        case 1:
            dayname="Monday";

        case 2:
                        dayname="Tuesday";

            case 3:
            dayname="Wednesday";

            case 4:
            dayname="Thrusday";

            case 5:
            dayname="Friday";

            case 6:
            dayname="Satrurday";
        default:

        case 7:
            dayname="Sunday";
            break;
    }
}


getdayname(dayname)

console.log("the day is",dayname);