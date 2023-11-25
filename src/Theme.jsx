import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';

const generiColors = {
  accent: '#FFA500',
  success: '#00C853',
  error: '#FF3B30',
};

const lightTheme = {
 colors: {
    primary: '#000',
    secondary: '#fff',
    alternative: '#fcfcfc',
    backgroundPrimary: '#fff',
    backgroundSecondary: '#000',
    backgroundDefault: '#fff',
    ...generiColors,
  },
};

const darkTheme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    alternative: '#232323',
    backgroundPrimary: '#000',
    backgroundSecondary: '#fff',
    backgroundDefault: 'rgb(57, 57, 57)',
    ...generiColors,
  },
};

const Theme = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const selectedTheme = isDarkMode ? darkTheme : lightTheme ;
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default Theme;
