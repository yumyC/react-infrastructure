import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setThemeInfo } from './themesApi'
import type { AxiosError } from 'axios'

// Sample types that will be used
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
        color: 'white',
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
