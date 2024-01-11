import {createContext, useContext} from "react";

export const ThemeContext = createContext({
  themeMode:"light",  
  darkTheme:() =>{},
  lightTheme:()=>{}
// these are default values/data given in the global object 
})

export const ThemeProvider=ThemeContext.Provider

// custom hook
// useTheme that uses the useContext hook from React to access the values from the ThemeContext
export default function useTheme(){
  return useContext(ThemeContext)
}