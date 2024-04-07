function calculate_total() {

    //gets value of petrol cost input then converts it a floating point number
    var petrol_cost = parseFloat(document.getElementById('petrol_cost').value);
    //gets value of liters input then converts it a floating point number
    var liters = parseFloat(document.getElementById('liters').value);

    //calculates total cost by multiplying petrol cost and liters purchased
    var total_cost = petrol_cost * liters;

    //gets the element where total cost will be displayed
    var total_costElement = document.getElementById('total_cost');
    //updates the content of the total cost
    total_costElement.textContent = "Total cost: $ " + total_cost.toFixed(2);
}

//calls the calculate_total function to calculate and display total cost
calculate_total();