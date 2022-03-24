import React from 'react';
import NewItemForm from './NewItem';
import GroceryItem from './SingleItem';
import '../../Styles/ShoppingList.css'

interface BudgetProps {
  items:any,
  item?:any,
};



class ShoppingList extends React.Component<{}, BudgetProps> {
  constructor(props:any) {
    super(props)
    this.state = {
      items: [
        /*Shopingowa lista*/
      
      ]
    }

    this.addGroceryItem = this.addGroceryItem.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
  }

  addGroceryItem(groceryitem:any) {
    let items:any = this.state.items.slice()
    items.push(groceryitem)
    this.setState({items: items})
  }

  toggleItem(index:any) {
    let items = this.state.items.slice()
    let item = items[index]
    item.purchased = !item.purchased
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <section className="section" data-testid="Card-Render-Test">
        <div className="container is-fluid">
          <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title">Shopping List</h1>
            <div className='logo'></div>

            <NewItemForm addItem={this.addGroceryItem}/>

            <div className="my-5">
              <ul>
                {this.state.items.map((item:string, index:string) => (
                  <GroceryItem key={index} item={item} toggleItem={() => this.toggleItem(index)}/>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShoppingList;