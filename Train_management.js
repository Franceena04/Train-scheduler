
document.getElementById("Addtrain_btn").addEventListener("click", addtrainfunction)
function addtrainfunction()
{
    let train_number = document.getElementById('train_input').value;
    let arrival = document.getElementById('arrival_input').value;
    let departure = document.getElementById('departure_input').value;

    if (train_number==="" || arrival==="" || departure==="")
    {
        alert("Please enter the details");
        return ;
    }
    
    const train_number_span = document.createElement("span");
    train_number_span.className = "train_number_class";
    train_number_span.innerText = `Train Number: `;

    const train_number_value = document.createElement("span");
    train_number_value.className = "train_number_value_class";
    train_number_value.innerText = train_number;

    const arrival_span = document.createElement("span");
    arrival_span.className = "arrival_class";
    arrival_span.innerText = "Arrival: ";

    const arrival_value = document.createElement("span");
    arrival_value.className = "arrival_value_class";
    arrival_value.innerText = new Date(arrival).toLocaleString();

    const departure_span = document.createElement("span");
    departure_span.className = "departure_class";
    departure_span.innerText = "Departure: ";

    const departure_value = document.createElement("span");
    departure_value.className = "departure_value_class";
    departure_value.innerText = new Date(departure).toLocaleString();;

    const train_list = document.createElement("li");
    train_list.className = "li";
  
    train_list.appendChild(train_number_span);
    train_list.appendChild(train_number_value);
    train_list.appendChild(document.createElement("br"));
    train_list.appendChild(arrival_span);
    train_list.appendChild(arrival_value);
    train_list.appendChild(document.createElement("br")); 
    train_list.appendChild(departure_span);
    train_list.appendChild(departure_value);

    const ul = document.getElementById('train_display_ul');
    ul.appendChild(train_list)


    train_input.value = '';
    arrival_input.value = '';
    departure_input.value = '';
}