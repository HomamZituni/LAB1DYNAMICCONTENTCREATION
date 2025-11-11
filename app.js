const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Target values and store the user values and validation check
addProductButton.addEventListener('click', function() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price');
    return;
  }
});





// Create the new list item
const li = document.createElement('li');
li.classList.add('cart-item');
li.dataset.price = price;

// Adding product name and price
li.innerHTML = `${name} - $${price.toFixed(2)}`;

// Storing price
li.dataset.price = price;

//Create a button dynamically 
const removeBtn = document.createElement('button');
removeBtn.textContent = "Remove";

// Click Event for Remove Button

removeBtn.addEventListener('click', function(event){
const li = event.target.closest('li');
const price = parseFloat(li.dataset.price);
updateTotalPrice(-price);
li.remove();
});

//Add button to the li
li.appendChild(removeBtn);

// Append the li to the ul and update the price
cart.appendChild(li);
updateTotalPrice(price);

// Clear the input fields for next item
productNameInput.value = '';
productPriceInput.value = '';


 
// Function to update the total price
let totalPrice = 0;
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Function for validation check of name and number





/*Shopping Cart

//Features 

1. Add items to the cart dynamically 
2. View items that are added, along with prices and quantities 
3. Update the quantity of items in the cart, reflecting real-time price changes. 
4. Remove items from the cart 
*/

//


// Step One Add items to the Cart dynamically 
/* 1. Get the values from the input fields (name and price)
   2. Validate the inputs 
   3. Create a new <li> element.
   4. Add the product name and price as content.
   5. Store the price in data-price on the <li>.
   6. Create a “Remove” button and attach removeItem as the click handler.
   7. Append the <li> to the cart (<ul>).
   8. Update the total price using updateTotalPrice().
   9. Clear the input fields for the next item.


// Step Two Removing Items from the Cart dynamically 
1. Adding 1-2 items from the cart from step 1
2. Clicke the automatically generated remove button on the item
3. Verify the item is removed from the ul 
4. Verify the total price updates correctly 
5. Repreat with remaining items

//Step Three Attempt to add products with empty names or invalid prices aka error handling 
1. Add validation check in the add product function
2. Add validation check in the total price function 
3.Add error message for each validation check 
4. Reset both input fields after an invalid entry 


// Additional HTML and CSS
HTML: Add a container for error messages
CSS: Need to style the cart items, remove button and the error messages

*/