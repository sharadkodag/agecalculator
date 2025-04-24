function onDateChange() {
    const dobString = document.getElementById("dob").value;
    const toDateString = document.getElementById("toDate").value;

    if (dob != null && toDate != null && toDateString != undefined) {
        const dob = new Date(dobString);
        const toDate = new Date(toDateString);

        let totalMonths = 0;
        totalMonths = (dob.getFullYear() - toDate.getFullYear()) * 12;
        totalMonths -= dob.getMonth();
        totalMonths += toDate.getMonth();
        console.log(totalMonths);

        const years = Number.parseInt(totalMonths / 12);
        const months = totalMonths % 12;
        const days = toDate.getDate() - dob.getDate();

        console.log("Age is : " + Math.abs(years) + " years " + Math.abs(months) + " months " + Math.abs(days) + " days");
        document.getElementById("outputAge").innerHTML = "Age is : " + Math.abs(years) + " years " + Math.abs(months) + " months " + Math.abs(days) + "days ";
    }
    else {
        document.getElementById("outputAge").innerHTML = "Age is : -- ";
    }
    
}