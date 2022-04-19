### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router enables navigation between components and allows us to keep our UI in sync with the browser URL.

- What is a single page application?
A SPA is an application that doesnt load entire new web pages. It dynamically rewrites the web page without ever reloading the browser.

- What are some differences between client side and server side routing?
Client side routing handles and processes data within the browser without ever refreshing the page.
Server side routing requires the server to respond with the appropriate data before the page can be loaded.

- What are two ways of handling redirects with React Router? When would you use each?
1. use a redirect component. This is good for redirecting users if they are not authorized for a certain route or perhaps types in an invalid url.
2. Using the useHistory (Which is actually now called useNavigate) hook. We can use navigate function to send users to the given route. This is handy for form submissions and its keeps track
of the visited pages unlike redirect.  


- What are two different ways to handle page-not-found user experiences using React Router? 
1. We could add a catch all route that renders a not found or 404 component.
2. We could again use a redirect component.

- How do you grab URL parameters from within a component using React Router?
  We use the useParams hook to gain access to the URL parameters.

- What is context in React? When would you use it?
Context is a way of creating variables or functions for use within any component or child components without having to pass it down to each child.

- Describe some differences between class-based components and function components in React.
1. Functional components dont use the same lifecycle methods as class based components.
2. Functional components are more readable and use less code vs class based.
3. We dont need a constucter or the render method when using a functional componenet.
4. Hooks were designed to solve alot of the setbacks of class based components, like the ability to easily share logic acrossed
multpile components.


- What are some of the problems that hooks were designed to solve?
I touched slightly on this in the last answer, but the main ones I can think of is readabilty, cleaner code, and the ability to seamlessly
share logic between componenets. 