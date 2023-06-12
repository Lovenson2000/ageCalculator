

function displayAge(){
    
    const userDate = document.getElementById("day").value;
    const userMonth = document.getElementById("month").value;
    const userYear = document.getElementById("year").value;

    const now = new Date();
    let currentdate = now.getDate();
    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear();

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if(userDate > currentdate){
        currentdate = currentdate + monthDays[currentMonth - 1];
        currentMonth --;
    }
    if (userMonth > currentMonth ) {
        currentMonth += 12;
        currentYear --;
    }

    const actualDate = currentdate - userDate;
    const actualMonth = currentMonth - userMonth;
    const actualYear = currentYear - userYear;

    document.getElementById("age").innerHTML = 'Your Age is '+actualYear+' Years '+actualMonth+' Months '+actualDate+' Days';
    console.log(userDate);

}

document.getElementById("submit-btn").addEventListener(
    "click", () => {
        document.querySelector("#age").className = "age";
    }
)

