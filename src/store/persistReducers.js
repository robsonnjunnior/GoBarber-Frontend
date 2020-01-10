import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persisteReducer = persistReducer(
    {
      key: 'goBarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persisteReducer;
};
