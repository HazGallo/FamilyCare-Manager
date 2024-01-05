import { Box, TextField } from 'monday-ui-react-core';
import { Heading } from 'monday-ui-react-core/next';
// import { TextFieldTextType } from 'monday-ui-react-core/dist/types/components/TextField/TextFieldConstants';
import '../../styles.css';
import { HeadingType } from 'monday-ui-react-core/dist/types/components/Heading/HeadingConstants';
import { TextTypes } from '@familyCare/common';
export const Login = (props: TextTypes) => {
  const { text, passwords } = props;
  return (
    <Box className="LoginContainer">
      <Box className="Login" rounded="Box-module_roundedMedium">
        <Box>
          <Heading type={'h2' as HeadingType}>
            Ingresa en Family Care App
          </Heading>
        </Box>
        <Box className="w-80">
          {/* <Text type={'text1' as TextType}>Correo Electronico</Text> */}
          <TextField
            // iconName={function noRefCheck() {}}
            placeholder="user@example.com"
            // showCharCount
            title="Correo Electronico"
            type={passwords}
            // validation={{
            //   text: 'Helper text',
            // }}
            wrapperClassName="monday-storybook-text-field_size"
            onIconClick={() => {
              console.log('hola');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
