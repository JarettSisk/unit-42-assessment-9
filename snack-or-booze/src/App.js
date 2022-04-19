import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import AddFoodForm from "./AddFoodForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const addNewItem = async (formData, category) => {
    try {
      if (category === "snacks") {
        // post to our db
        await SnackOrBoozeApi.addSnack(formData);
        // get the new list
        let res = await SnackOrBoozeApi.getSnacks();
        setSnacks(res);
      }
  
      if (category === "drinks") {
        // post to our db
        await SnackOrBoozeApi.addDrink(formData);
        // get the new list
        let res = await SnackOrBoozeApi.getDrinks();
        setDrinks(res);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
    getDrinks()
  }, [setDrinks, setSnacks]);

 

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* NavBar */}
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              {/* Home */}
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/foods/new">
              {/* AddFoodForm */}
              <AddFoodForm addNewItem={addNewItem}/>
            </Route>
            <Route exact path="/snacks">
              {/* Menu */}
              <Menu items={snacks} title="Snacks" urlPath="/snacks" />
            </Route>
            <Route exact path="/drinks">
              {/* Menu */}
              <Menu items={drinks} title="Drinks" urlPath="/drinks" />
            </Route>
            <Route path="/snacks/:id">
              {/* Snack */}
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              {/* Drink */}
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
