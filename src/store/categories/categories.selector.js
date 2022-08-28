import { createSelector } from 'reselect';

// memorizable selector
const selectCategoriesReducer = (state) => state.categories;  //passed further

const selectCategories = createSelector(
  [selectCategoriesReducer],                      //input of whole func of selectCategoriesReducer
  (categoriesSlice) => categoriesSlice.categories  //output 
)

export const isLoadingSelector = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)

export const selectCategoriesMap = createSelector(
  [selectCategories],                              //input of whole func of selectCategories
  (categories) => categories.reduce((acc, category) => {
    const { items, title } = category;
    acc[title] = items;
    return acc;
  }, {})
)

/**
 * {
 *  title:items,
 * 
 *  title: [ {}, {}, {}, {},{} ], 
 *  title: [ {}, {}, {}, {},{} ], 
 *  title: [ {}, {}, {}, {},{} ], 
 *  title: [ {}, {}, {}, {},{} ], 
 *  title: [ {}, {}, {}, {},{} ], 
 * }
 *  */