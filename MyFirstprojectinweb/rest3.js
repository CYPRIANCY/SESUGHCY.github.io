// Function to dynamically populate menu items
function populateMenu() {
  const menuItems = [
      { name: "Item 1", description: "Description of Item 1", price: 10 },
      { name: "Item 2", description: "Description of Item 2", price: 12 },
      // Add more menu items here as needed
  ];

  const menuContainer = document.getElementById('menu-items');

  menuItems.forEach(item => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');

      menuItemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>$${item.price}</p>
      `;

      menuContainer.appendChild(menuItemDiv);
  });
}

// Function to handle reservation form submission
function handleReservationForm(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Perform form validation (you can add more validation as needed)
  if (name.trim() === '' || email.trim() === '' || date.trim() === '' || time.trim() === '') {
      alert('Please fill in all fields.');
      return;
  }

  // Simulate sending reservation data to server (replace with actual backend code)
  console.log('Reservation details:', { name, email, date, time });
  alert('Reservation submitted successfully!');
  document.getElementById('reservation-form').reset(); // Reset form fields
}

// Event listener for reservation form submission
document.getElementById('reservation-form').addEventListener('submit', handleReservationForm);

// Call function to populate menu items when the page loads
populateMenu();
