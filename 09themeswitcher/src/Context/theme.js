import {createContext, useContext} from "react";

export const ThemeContext = createContext({
  themeMode:"light",  
  darkTheme:() =>{},
  lightTheme:()=>{}
// these are default values/data given in the global object 
})

export const ThemeProvider=ThemeContext.Provider

// custom hook
export default function useTheme(){
  return useContext(ThemeContext)
}