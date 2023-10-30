import { Palette } from '@mui/icons-material';
import {Theme, createTheme } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';

export const Tokens = (mode: 'light' | 'dark') => ({
  ...(mode === 'light' ? {
    background: {
      400: "#eae4eb",
      500: "#CEC5CF",
    },
    pink: {
      100: "#CB92CE44",
      500: "#CB92CE",
    },
    gray: {
      500: "#B2B2B2",
    },
    teal: {
      500: "#9DC1CC",
    }
  }
  : 
  {
    background: {
      400: "#555155",
      500: "#4F4B4F",
    },
    pink: {
      500: "#D1A4D4",
    },
    gray: {
      500: "#B2B2B2",
    },
    teal: {
      500: "#9DC1CC",
    }
  }),
});

export const ThemeSettings = (mode: 'light' | 'dark') => {
  const colors = Tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'light' ? {
        background: {
          default: colors.background[500],
          paper: colors.background[400],
        },
        primary: {
          light: colors.pink[100],
          main: colors.pink[500],
        },
        secondary: {
          main: colors.gray[500],
        },
        success: {
          main: colors.teal[500],
        },
      }: {
        background: {
          default: colors.background[500],
          paper: colors.background[400],
        },
        primary: {
          light: colors.pink[100],
          main: colors.pink[500],
        },
        secondary: {
          main: colors.gray[500],
        },
        success: {
          main: colors.teal[500],
        },
      })
    }
  }
}

export const colorModeContext = createContext({
  toggleColorMode: () => {}
});

interface UseModeReturnType {
  theme: Theme;
  colorMode: {
    toggleColorMode: () => void;
  };
}

export const useMode = (): UseModeReturnType => {
  const [mode, setMode] = useState<'light' | 'dark'>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev)  => (prev === "light" ? "dark" : "light")),
    }), []
  )
  const theme = useMemo(() => createTheme(ThemeSettings(mode)), [mode]);

  return {theme, colorMode};
};