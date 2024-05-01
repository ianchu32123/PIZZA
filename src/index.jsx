import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index1.css"


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(pizza) {
  // if(pizza.soldOut==true){
  //   return null;
  // } 盡量不要這樣
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" :""}`}>   {/* 如果soldout就跑classname=soldOut 沒有則回傳空值 */}
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>
        {pizza.soldOut ? "Sold out": pizza.price}
        </span>
      </div>
    </li>
  )
}

function Header (){
    return (
      <header className='header'>
      <h1 >我的pizza店 pizza company.co</h1>
      </header>
      )
}
function Menu (){
  const pizzas = pizzaData;
  const numpizza = pizzas.length;
  return(
    <main className='menu'>
      <h2>我的菜單</h2>
      
      {numpizza > 0 ?
       <React.Fragment>
       <p>
       這裡有{numpizza}種pizza，絕對很好吃，因為我做很久。
      </p>                        
      <ul className='pizzas'>  {pizzas.map(pizza => (    /* pizzas代表PIZZADATA MAP重新輸出數組 回傳參數PIZZA */
        <App
        key = {pizza.name}
        name={pizza.name}
        ingredients={pizza.ingredients}
        photoName={pizza.photoName}
        price={pizza.price}
        soldOut = {pizza.soldOut}
        />
        ))}</ul>
        </React.Fragment>
        :(<p>沒東西吃了</p>)}
        
      {/* <App 
      name="Pizza Spinaci" 
      ingredients= "Bread with italian olive oil and rosemary" 
      photoName = "pizzas/focaccia.jpg" 
      price = "12"/>
      <App
      name= "Pizza Margherita"
      ingredients= "Tomato and mozarella"
      price= {10}
      photoName= "pizzas/margherita.jpg"/>
      <App
      name= "Focaccia"
      ingredients= "Bread with italian olive oil and rosemary"
      price = {6}
      photoName= "pizzas/focaccia.jpg"/>
      <App
       name= "Pizza Funghi"
       ingredients= "Tomato, mozarella, mushrooms, and onion"
       price = {12}
       photoName = "pizzas/funghi.jpg"/>
       <App
        name = "Pizza Prosciutto"
        ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese"
        price = {18}
        photoName = "pizzas/prosciutto.jpg"/> */}
    </main>
  )
}
function Footer (){
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 24;
  const isopen = hour>=openhour&&hour<=closehour;
  return(
    <footer className='footer'>
      {isopen ? (
        <div className='order'>
          <p>
            我們從{openhour}:00營業到{closehour}:00
          </p>
          <button className='btn'>order</button>
        </div>
    ): <p>關門了 明天再來</p>}</footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Footer />
  </React.StrictMode>
);


