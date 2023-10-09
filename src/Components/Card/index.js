import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";

function Card({
  tittle,
  imageUrl,
  price,
  id,
  onFavorite,
  onAddToCart,
  onDeleteFromCart,
  isAdded,
  favorited = false,
  loading,
}) {
  // const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onAddToCart({ tittle, imageUrl, price, id });
  };

  const onDelete = () => {
    onDeleteFromCart(id);
  };

  const onClickFavorite = () => {
    onFavorite({ id, tittle, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={255}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="116" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="137" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="191" rx="8" ry="8" width="80" height="24" />
          <rect x="115" y="183" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {/* иконка лайка */}
          <div onClick={onClickFavorite} className="favorite">
            <img
              className="cu-p"
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-Unliked.svg"
              }
              alt="Unliked"
            />
          </div>

          {/* кроссовки */}
          <img width="100%" height={130} src={imageUrl} alt="Sneakers" />
          <h5>{tittle}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>{price}</b>
            </div>
            {onAddToCart && 
              <img
                className={styles.plus}
                onClick={isAdded(id) ? onDelete : onClickPlus}
                src={isAdded(id) ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
                alt="Plus"
              />
            }
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
