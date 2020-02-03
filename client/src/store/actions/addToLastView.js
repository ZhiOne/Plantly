import * as constants from "../constants";
import { store } from "../index";

export const addToLastViewSuccess = data => {
  return {
    type: constants.ADD_TO_LAST_VIEW_SUCCESS,
    payload: data,
  };
};

export const addCurrentId = data => {
  return {
    type: constants.ADD_CURRENT_ID,
    payload: data,
  };
};

export const addToLastView = data => dispatch => {
  dispatch(addCurrentId(data));
  const arr = store.getState().lastViewReducer.lastView;

  let lastViewedProducts = [];

  if (arr.length >= 5) {
    const arrLenght = arr.length - 4;

    arr.shift(arrLenght);
  }
<<<<<<< HEAD
=======

  const dataObj = {
    id: data,
    date: new Date().getTime(),
  };
  // console.log("dataObj", dataObj);

  // eslint-disable-next-line
  current = [...arr, ...[dataObj]];
  // console.log("current", current);

  // const cleanArr = current.map(item => {
  //   if (item.id === dataObj.id && item.data > dataObj.data) {
  //     console.log("sovpadenie!");
  //     return item;
  //   }
  // });
  // eslint-disable-next-line
  let lastViewedProducts = current;

  const updateLastViewedProducts = (lastViewedProducts, newProduct) => {
    // Проверяем, есть ли в текущем массиве тот продукт, на который мы кликнули
    if (
      lastViewedProducts.some(
        item => item.id === newProduct.id && item.date < newProduct.date
      )
    ) {
      // Если такой продукт в массиве уже есть, то мы просто возвращаем новый массив, где он перенесен в конец списка, путем банальных манипуляций с использованием стандартных методов массивов
      return lastViewedProducts
        .filter(item => item.id !== newProduct.id)
        .concat(newProduct);
    }
    // Если такого продукта в массиве нет, то просто добавляем его в массив
    return lastViewedProducts.concat(newProduct);
  };

  lastViewedProducts = updateLastViewedProducts(current, dataObj);

  // console.log("lastViewedProducts", lastViewedProducts);

  // const unique = [...new Set(current)];
  // console.log("unique", unique);
>>>>>>> origin/dev

  const inputId = data;

  const updateLastViewedProducts = (lastViewedProducts, newProduct) => {
    if (arr.some(item => item === newProduct)) {
      // eslint-disable-next-line
      return (lastViewedProducts = arr
        .filter(item => item !== newProduct)
        .concat(newProduct));
    }

    // eslint-disable-next-line
    return (lastViewedProducts = [...arr, ...[newProduct]]);
  };
  lastViewedProducts = updateLastViewedProducts(lastViewedProducts, inputId);

  dispatch(addToLastViewSuccess(lastViewedProducts));
};
