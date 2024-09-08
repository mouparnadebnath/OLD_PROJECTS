function calculateAge(){
    const dob = new Date(document.getElementById('dob').value);
    const today=new Date();

    if(isNaN(dob.getTime())){
        document.getElementById('output').innerHTML = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear( ) - dob.getFullYear();
    const monthdifference = today.getMonth() - dob.getMonth();

    if (monthdifference < 0 || (monthdifference === 0 && today.getDate() < dob.getDate())){
        age--
    }
    document.getElementById('output').innerHTML = " You are " + age + " years old.";
}