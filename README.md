# SBA React Application
## Using Reducer, useContext, useRouter html, css and javascript
### Henry Berganza Guevara

A fake store is created using a fake API https://fakestoreapi.com/

### Netlify link https://myfakestoresba.netlify.app/

## Credential to try the App.
{
  
    "username": "johnd",
    "password": "m38rmF$",
}
{

    "username": "mor_2314",
    "password": "83r5^_",

}

The project use modularity with React. To make a page very responsive for the user.
The project include the next section.

## src folder
### App.jsx
This is the first element call for the main.jsx file.  It contains the routes to the different pages.
We use this Hooks.
It contains the Navbar components.  This component will be display out of the routers.
#### Router 
to include all the list of routes.
#### Route 
to define every route to the pages.
#### Navigate 
to redirect in this case if there is no user logged.


## pages folder

### Store.jsx
It will show all the components of the store principal page.
It contains the next subcomponents.
#### Header
It contains the part where can be displayed the name of the store.

#### Section
In this component the products will be displayed.

#### Footer
Include static information at the end of the page.

### Cart.jsx
It will show all the products the user add.
Contains the same elements of the store.jsx.


### Login.jsx
It include the form to let the user can use the credentials.

#### useContext
I use the useContext to get the information of the user.  If it is logged it redirect to the store page.

#### useReducer
If the user add a valid credential a dispatch  method of the useReducer  will add the credintials to the usecontext state

#### useState
I use useState to save the list of users to compare with the credential of the user.

#### useEffect
I use useEffect to fetch at the begining the users to the useState.


## context folder

### UserProvider
Contain variables of control of the application like, the user data, the cart and session control.

### ProductProvider
Contain the list of the products.  Is useful becouse the products are visible in interior elements.

## Components folder
Additional to the components mention before contains.
### Card.jsx
This component display a card of a product

### NavBarElement
This component display an li element of the nav.

#### Unsolved problems.

For now there are few thinks but important that made the project don't work like I want.

I'm working on:
Filter Products (It is easy with the API but I want to try to filter directly from the array)
Add productos to the cart.
Show the cart.  I don't add products for now. If will be easy just adding the products. I will try to finished and change this.
Logout.  Logout from the site and return to the login page.

