// Get the product container element
const productContainer = document.getElementById("product-container");

// Attach a click event listener to the product container
productContainer.addEventListener("click", (event) => {
  // Check if the click was on a product
  if (event.target.classList.contains("product")) {
    // Get the product ID
    const productId = event.target.dataset.productId;

    // Fetch the reviews for the product
    fetch(`https://api.restdb.io/reviews?q={"product_id":"${productId}"}`, {
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "YOUR_API_KEY"
      }
    })
      .then((response) => response.json())
      .then((reviews) => {
        // Update the HTML with the reviews
        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.innerHTML = reviews
          .map((review) => {
            return `<div class="review">
              <div class="review-text">${review.text}</div>
              <div class="review-author">${review.author}</div>
            </div>`;
          })
          .join("");
      });
  }
});