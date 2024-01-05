import { Box, Flex } from 'monday-ui-react-core';
import { CustomAvatar } from '../components/CustomAvatar';
// import { Login } from '../components/Login';

export function App() {
  // const [isHovered, setIsHovered] = useHover();
  return (
    <Box>
      <Box
        border={Box.borderColors.UI_BORDER_COLOR}
        backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}
        shadow={Box.shadows.LARGE}
      >
        <CustomAvatar
          name="Hazley"
          urlAvatar="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Flex justify={Flex.justify.CENTER}>Que onda</Flex>
      </Box>
    </Box>
  );
}

export default App;
