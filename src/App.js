import React, { useState, createContext } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./Components/context";
import Orders from "./pages/Orders";
import Inputs from "./Components/Input";

// const arr = [
//   {
//     tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
//     ptice: 12999,
//     imageUrl: "/img/sneakers/1.jpg",
//   },
//   {
//     tittle: "Мужские Кроссовки Nike Blazer Mid Suede",
//     ptice: 12999,
//     imageUrl: "/img/sneakers/1.jpg",
//   },
// ];

// export const AppContext = React.createContext({});

function App() {
  //Кроссовки в Drawer
  const [cartItems, setCartItems] = useState([]);

  // открытие Drawer
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //массив наших кроссовок
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCart = async () => {
    axios
      .get(`https://6509820cf6553137159b94c2.mockapi.io/cart`)
      .then((res) => {
        setCartItems(res.data);
      });
  };

  React.useEffect(() => {
    // axios
    //   .get(`https://6509820cf6553137159b94c2.mockapi.io/items`)
    //   .then((res) => {
    //     setItems(res.data);
    //   });
    // getCart();
    async function fetchData() {
      await getCart();
      const itemsResponse = await axios.get(
        `https://6509820cf6553137159b94c2.mockapi.io/items`
      );

      setIsLoading(false);
      setItems(itemsResponse.data);
      console.log(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post(`https://6509820cf6553137159b94c2.mockapi.io/cart`, obj)
      .then((res) => getCart());
  };

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const onDeleteFromCart = (id) => {
    const cartItem = cartItems.find((item) => item.id === id);
    const { new_id } = cartItem;
    axios.delete(`https://6509820cf6553137159b94c2.mockapi.io/cart/${new_id}`);
    setCartItems(cartItems.filter((e) => e.id !== id));
  };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://6509820cf6553137159b94c2.mockapi.io/cart/${id}`);
  //   setCartItems((prev) => prev.filter(item => item.id !== id));
  // };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    //   try {
    //     if (favorites.find((favObj) => favObj.id === obj.id)) {
    //       setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    //     } else {
    //       const { data } = await axios.post("/favorites", obj);
    //       setFavorites((prev) => [...prev, obj]);
    //     }
    //   } catch (error) {
    //     alert("Не удалось добавить в фавориты");
    //   }
    // };

    if (favorites.find((favObj) => favObj.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <AppContext.Provider
      value={{ cartItems, items, favorites, setCartOpened, setCartItems }}
    >
      <div className="wrapper clear">
        {/* начало корзины */}
        <Drawer
          onDeleteFromCart={onDeleteFromCart}
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          opened={cartOpened}
        />

        {/* заголовок header */}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isAdded={isAdded}
                onDeleteFromCart={onDeleteFromCart}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          ></Route>

          <Route
            path="/favorites"
            element={
              <Favorites isAdded={isAdded} onAddToFavorite={onAddToFavorite} />
            }
          />

          <Route path="/orders" element={<Orders />} />

          <Route path="/beforeOrder" element={<Inputs />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
