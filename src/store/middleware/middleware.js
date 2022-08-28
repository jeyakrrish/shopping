export const loggedMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("===>Current state", store.getState());
  console.log("===>Type", action.type);
  console.log("===>Payload", action.payload);

  next(action);

  console.log("===>Next state", store.getState());

}