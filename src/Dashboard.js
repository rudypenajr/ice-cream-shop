import React from "react";
import DATA from "./data";
import _ from "lodash";
const COMPANY = "Optimizely";
const USER = "Rudy Pena";

class IceCreamShop extends React.Component {
  renderUser(usr) {
    return <span key="usrName">{usr}</span>;
  }

  renderList(key) {
    let list = []
    DATA.INGREDIENTS.map(obj => {
      if (obj.type === key) {
        list.push(
          <li key={obj.name}>{obj.name}</li>
        )
      }
    })
    return list
  }

  renderRecipeTag(arr, conjugation) {
    let desc = []

    arr.forEach((rule) => {
      if (_.isArray(rule)) {
        const old = rule.slice()
        const conjugation = old.shift()
        const subdescription = this.renderRecipeTag(old, conjugation)
        
        if (desc.length === 0) {
          desc.push( `(${subdescription.join(` ${conjugation} `)} )` )
        } else {
          desc.push( `(${conjugation} ${subdescription.join(' nor ')} )` )
        }
      }

      DATA.INGREDIENTS.forEach((ingredient) => {
        if (rule === ingredient.id) {
          desc.push(ingredient.name)
        }
      })
    })

    return desc
  }

  renderRecipes() {
    let list = []
    
    DATA.RECIPES.map(obj => {
      const old = obj.rules.slice()
      const conjugation = old.shift()
      let desc = this.renderRecipeTag(old, conjugation)
      
      list.push(
        <li key={obj.id}><b>{obj.name}</b> - {desc.join(` ${conjugation} `)}</li>
      )
    })

    return list
  }

  render() {
    const iceCreamList = this.renderList('ice_cream')
    const toppingsList = this.renderList('topping')
    const recipesList = this.renderRecipes()

    return (
      <div class="card">
        <h2>
          Welcome, {this.renderUser(USER)}, to the {COMPANY} Ice Cream Shop!
        </h2>

        <div className="flex-container">
          <div>
            <h3>Ice Creams 🍦</h3>
            <ul>
              {iceCreamList}
            </ul>
          </div>

          <div>
            <h3>Toppings 🍓🍫</h3>
            <ul>
              {toppingsList}
            </ul>
          </div>
        </div>

        <h3>Recipes 🗒</h3>
        <ul>
          {recipesList}
        </ul>
      </div>
    );
  }
}

export default IceCreamShop;
