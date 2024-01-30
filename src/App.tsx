import { AppProvider } from "@/providers";
import { Typography } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Typography>App</Typography>
    </AppProvider>
  );
};

export default App;
