function calculate_total() {

    var petrol_cost = parseFloat(document.getElementById('petrol_cost').value);
    var liters = parseFloat(document.getElementById('liters').value);

    var total_cost = petrol_cost * liters;

    var total_costElement = document.getElementById('total_cost');
    total_costElement.textContent = "Total cost: $ " + total_cost.toFixed(2);
}

calculate_total();