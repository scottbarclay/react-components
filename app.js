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

// `state` is just an object literal
    this.state = {
      done: false,
      hover: false
    };
	}
// When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

onListItemHover() {
    this.setState({
      hover: !this.state.hover                   
    });
  }

	render() {

// Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

		return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
		);
	}
}

ReactDOM.render(<GroceryList groceryItems={['almonds', 'cranberries']}/>, document.getElementById("app"));



