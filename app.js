// TODO
// create groceryList component
// var GroceryList = () => (
//   <ul><li>almonds</li><li>cranberries</li></ul>
// );


var Almonds = () => (
  <li>almonds</li>
);

var Cranberries = () => (
  <li>cranberries</li>
);

var GroceryList = () => (
  <div>
    <ul>
	    <h2>Grocery List</h2>
			    <Almonds />
			    <Cranberries />
    </ul>
  </div>
);
ReactDOM.render(<GroceryList />, document.getElementById("app"));