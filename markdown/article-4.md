# 本篇记录redux的学习。
个人理解状态的管理其实就是前端的一个临时仓库。
具体流程：组件向store发起存/取操作，store分发给各个reducer去处理对应方法再存/取在store中，最后反馈给组件。
适用场景：多组件共享数据，一般存放全局性的数据。此案例存储全局主题色。
##  1. 安装react-redux

~~~js
npm install @reduxjs/toolkit react-redux
~~~
##  2. 入口文件引入store

~~~js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/router/index'
import 'semantic-ui-css/semantic.min.css'
import './index.module.scss'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
~~~
## 3. 创建reducer
~~~js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setThemeInfo } from './themesApi'
import type { AxiosError } from 'axios'

export interface Theme {
  color?: string
  size?: string
}

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const setTheme = createAsyncThunk<
Theme,
  { color: string, size: string },
  {
    rejectValue: ValidationErrors
  }
>('themes/update', async (themeData, { rejectWithValue }) => {
  try {
    const response = await setThemeInfo(themeData)
    return response.data
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return rejectWithValue(error.response.data)
  }
})

interface ThemesState {
  error: string | null | undefined
  entities: Theme
}

const initialState = {
  entities: {},
  error: null,
} as ThemesState

const themesSlice = createSlice({
  name: 'themes',
  initialState,
  // 同步
  reducers: {
    getTheme(state) {
      state.entities['theme'] = {
        color: 'black',
        size: 'normal'
      }
    },
  },
  // 异步
  extraReducers: (builder) => {
    builder.addCase(setTheme.fulfilled, (state, { payload }) => {
      state.entities['theme'] = payload
    })
    builder.addCase(setTheme.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        // state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
  },
})

export const { getTheme } = themesSlice.actions

export default themesSlice.reducer

~~~
## 4. 配置reducer
~~~js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import colorReducer from './themes/slice'

const reducer = combineReducers({
  theme: colorReducer,
});

const store = configureStore({
  reducer,
});

export default store;
~~~
## 5. 应用
~~~js
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '@/store/themes/slice';
import { useEffect } from "react";

const home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [])

  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;
  if (!Object.keys(list.entities).length || !list.entities) {
    dispatch(getTheme() as any);
  }

  const setThemeColor = () => {
    const nowColor: string = themeColor==="black"?'white':'black';
    dispatch(setTheme({color: nowColor, size: 'small'}) as any);
  }
  return (
    <div>
      <div>
        当前主题色： {themeColor} <button onClick={setThemeColor}>点我切换主题色</button>
      </div>
      {/* Outlet相当于是子路由的占位符 */}
      <Outlet />
    </div>
  );
};
export default home;
~~~
