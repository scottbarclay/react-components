// TODO
// create groceryList component
// var GroceryList = () => (
//   <ul><li>almonds</li><li>cranberries</li></ul>
// );


// var Almonds = () => (
//   <li>almonds</li>
// );

// var Cranberries = () => (
//   <li>cranberries</li>
// );

// var GroceryList = () => (
//   <div>
//     <h2>Grocery List</h2>
// 	  <GroceryListItem groceryItems={['almonds', 'cranberries']} />
//   </div>
// );

// var groceryItems = ['almonds', 'cranberries'];

var GroceryList = (props) => (
	<div>
		<h2>Grocery List</h2>
		<ul>		  
	    {props.groceryItems.map(item =>
	      <GroceryListItem item={item} />
	    )}		  
	  </ul>
  </div>
);

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <li>{this.props.item}</li>
		);
	}
}

ReactDOM.render(<GroceryList groceryItems={['almonds', 'cranberries']}/>, document.getElementById("app"));

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );
