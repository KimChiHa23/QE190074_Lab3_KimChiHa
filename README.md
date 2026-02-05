Lab 3: Shopping Cart with Local Storage

Objective:
Develop a Shopping Cart feature for an e-commerce web application using React/Next.js.
Users can select products, choose quantities, add items to a cart, and persist cart data using Local Storage.
The cart icon should display the total number of products added.

Requirements
• Use React or Next.js for implementation
• Use Tailwind CSS for styling
• Use at least one ShadCN UI component
• Cart data must be stored in browser Local Storage

Functional Requirements
1. Product List
- Display a list of products (name, image, price)
- Each product must have:
  + Quantity selector
  + Add to Cart button

2. Cart Behavior
- When clicking Add to Cart:
  + Product is added to cart
  + Quantity is updated if product already exists
- Cart data is saved in Local Storage
- Cart data is loaded from Local Storage on page reload

3. Cart Indicator
- Display a cart icon in the header
- Show total number of items in the cart

4. Cart Page
- Display all products in the cart
- Show product name, price, quantity, subtotal
- Allow user to:
  + Increase/decrease quantity
  + Remove product
- Display total cart value

Technical Requirements
• Use reusable React components:
  - ProductCard
  - CartItem
  - CartIcon
• Use React state and useEffect for syncing with Local Storage
• Use responsive layout for mobile and desktop

Design Considerations
• UI should be clean and user-friendly
• Responsive layout
• Cart updates should feel instant (no page reload)

Submission
Submit a .doc/.docx file that includes:
• Deployed website URL
• GitHub repository link
