document.getElementById('user').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const firstName = document.querySelector('input[name="FirstName"]').value;
    const lastName = document.querySelector('input[name="LastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="Address"]').value;
    const pincode = document.querySelector('input[name="pincode"]').value;
    const gender = document.querySelector('input[name="Gender"]:checked').value;
    
    // Retrieve selected food choices
    const foodChoices = Array.from(document.querySelectorAll('input[name="Choiceoffood"]:checked'))
                            .map(food => food.value)
                            .join(', ');

    const state = document.querySelector('input[name="State"]').value;
    const country = document.querySelector('input[name="Country"]').value;

    // Create a new row
    const newRow = `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foodChoices}</td>
            <td>${state}</td>
            <td>${country}</td>
        </tr>
    `;

    // Insert the new row into the table
    document.getElementById('tableData').insertAdjacentHTML('beforeend', newRow);

    // Optionally, reset the form
    document.getElementById('user').reset();
});