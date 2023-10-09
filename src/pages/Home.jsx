import Card from "../Components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isAdded,
  onDeleteFromCart,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.tittle.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filterItems).map((item, index) => (
      <Card
        isAdded={isAdded}
        cartItems={cartItems}
        key={index}
        {...item}
        onDeleteFromCart={onDeleteFromCart}
        onFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск"
          ></input>
        </div>
      </div>

      {/* карты */}
      <div className="d-flex card_block">{renderItems()}</div>
    </div>
  );
}

export default Home;
