/* This is a global color palette used in the entire website */
/* Modularize */
import { createTheme } from '@material-ui/core/styles';

const Colors = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    accent: {
      main: "#FCC149",
      dark: "#e65100"
    },
    warmColor: {  
      main: "#f67e7d",
      light:"#ffb997",
      dark: "#621940"
    }
  },
});

export default Colors;
