import React, { useState, useEffect } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(
        (item.salePrice || item.originalPrice) * item.quantity
      ).toFixed(2);
    });
    return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="row">
          <div className="book__selected--top">
            <h2 className="cart__title">Cart</h2>
          </div>
          <div className="cart">
            <div className="cart__header">
              <span className="cart__book">Book</span>
              <span className="cart__quantity">Quantity</span>
              <span className="cart__total">Price</span>
            </div>
            <div className="cart__body">
              {cart.map((item) => {
                const itemPrice = item.salePrice || item.originalPrice;
                return (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__book">
                      <img src={item.url} alt="" className="cart__book--img" />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{item.title}</span>
                        <span className="cart__book--price">
                          ${(itemPrice || 0).toFixed(2)}
                        </span>
                        <button
                          className="cart__book--remove"
                          onClick={() => removeItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                        value={item.quantity}
                        onChange={(event) =>
                          changeQuantity(item, event.target.value)
                        }
                      />
                    </div>
                    <div className="cart__total">
                      ${(itemPrice * item.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            {cart.length === 0 && (
              <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart!</h2>
                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${(total() * 0.1 + total()).toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Haven't got around to doing this `)}
              >
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
