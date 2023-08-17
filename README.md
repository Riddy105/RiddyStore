# PROJECT TITLE

RiddyStore is an e-commerce web application where users can shop different items across different categories such as men wears, electronics, women wears and electronics.

## Built With

- [ReactJS](https://beta.reactjs.org/) - A JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework that lets you style HTML pages
- [Ionic](https://ionicframework.com/)

## Available Scripts

In the project directory, you can run:

### `ionic serve`

Runs the app in the development mode.\
Open [http://localhost:8100](http://localhost:8100) to view it in your browser.

The page will reload when you make changes.\

## PROJECT DESCRIPTION

RiddyStore has multiple categories for users to shop from.

- On the home page, users can either search for available products or click on any category to see all products for that categories.

- On the category page, all the products available for specific category are displayed with necessary information such as the name of product, image, and price. A user can click on any of the product to see a detail page for such product.

- On the product-detail page, more information pertaining to each product is displayed including a description of the product. Users are able to add such product to cart on this page, increment or decrement the quantity as needed.

- On the cart page, users can see all the items they added to cart, total items in cart, and total amount. Users are able to remove items from cart, increase or decrease the quantity of such items. All these actions reflect in the state of the cart including the total Amount of all cart items, number of items in cart. There’s a checkout button on the cart page.

- On the checkout page, users are able to fill out information necessary for checkout such as their name, shipping address, and card details. If all inputs are correct, a success modal pops up otherwise, there’s an error feedback in any concerned input field. Across all the pages of the app, the header component remains constant and users are able to move from one category to the next, and also visit the cart.

## BRIEF APPROACH.

Redux was utilized for state management and there is a slice named “cartSlice” in the store managing all cart data(totalAmount, itemsInCart, cartItems)and also all products, categories.

The initial state of this slice has a products field that starts out as an empty array. In the root of the application, there was an API call to fetch all the products from the backend and dispatch this (array full of products) to the products in the store using an reducer action named “writeProducts”, this action takes the array of products as a payload.

dispatch(cartActions.writeProducts(productArray)).

- On the home page, a CATEGORIES array is being pulled out of the store also. It contains an object for individual categories, each object contains the name and cover image for each category.

- On Category page, all PRODUCTS are pulled out from the store and filtered based on the present category in the URL. The returning array then contains only products of such categories and rendered on the screen.

- On Product detail page, the present product name is fetched from the URL and this string is used to find that particular product in the array of all PRODUCTS pulled from the store. The returning value is an object containing all the data about a particular product, the description, name, price. These data are rendered on the screen.

It is important to note that it is on this page users are able to add to cart, this is done by dispatching an action named “addItemToCart” to the store. This action takes a payload of the object of item to be added to cart.

In a case where the item is being added for the first time, the action in the store then merges this object into the cartItems array.

On the other hand, if the item is an existing cart Item, this condition is checked by filtering through all the cart Items with the id of the item intended to be added. If such item already exists, the quantity is updated accordingly likewise other data in the store such as totalAmount.

- On the cart page, users are able to remove, increase and decrease quantity of items. This is done by dispatching the corresponding reducer action named “removeItemFromCart”, “incrementItem” and “decrementItem” respectively.

It is important to mention here that I am not sending a POST request to the backend on adding to the cart, this is because the documentation of the API clearly stated that while this on the surface looks like you really made an API call, no real data is being stored on the backend and if this should be the case, I presumed it’s better to keep our cartItems state local because sending a GET request to the cart endpoint returns a 404.

- On checkout, Formik was utilized to handle forms swiftly.

## CHALLENGES

While I didn’t battle any major challenge with the logic of the application, perhaps because I’ve built a similar e-commerce in the past, I did face quite a number of challenges with the UI/styling, and this is primarily ionic-specific because it was my first time with it.

- First of that challenge is with the IonAlert component that I utilized for giving a feedback when an item is added to cart, the alert doesn’t popup on top of the viewport rather it does on top of the screen making it impossible to see any alert on mobile when you add to cart.

- Secondly, a similar problem also, the success modal that pops up on successful checkout doesn’t come on the viewport, rather it does so at the too of the page making it impossible for a mobile user to see the success modal after checking out. I’m currently troubleshooting what the problem could be in the ionic docs.

- The major challenge worth mentioning is the one I faced while trying to deploy my app to Netlify, I spent hours googling and trying different solutions which proved futile. The build was failing on Netlify and I didn’t even know why. After it failed the first time, I knew it had to be build command, I changed it to what I had in the package.json all to no avail, I tried a whole lot of solutions I saw on google before I later found the build command that works which was 'ionic build --prod'

## MOVING FORWARD

I’ll be adding more validations to the forms on checkout to make it as rigorous as a real-world checkout.

I’ll also be enhancing the styling of the application as time did not permit me to start thinking of colors. So essentially, a better UI.

## File Structure

In the src folder, there is a components folder and pages folder basically. These folders are configured in such a way that they have an 'index.ts' file each at their root. This file serves as an export point for all files in the respective folders. i.e If you take a look at the index.ts in the components folder, you'll see there are a lots of export going on there. This is done in order to reduce the number of lines of import we will have to do in another file elsewhere whenever we need any file from "components" folder. This will be better understood if you take a look at "./src/pages/Root/Root.jsx".

- The usual way we go about importing a file is to navigate through the file directory i.e

import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

- But you'll notice that all these files are located inside "components" folder and we are utilising lot of lines to import different things from same folder("components"). We can instead have our import like this which makes our code neater and saves us a lot of lines of relative imports i.e

import { Header, Footer, Nav} from '../../components';
