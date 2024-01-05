import { TextFieldTextType } from 'monday-ui-react-core/dist/types/components/TextField/TextFieldConstants';

// libs/familyCare-common/src/common.interface.ts
export interface FamilyCareCommon {
  // Define las propiedades o métodos que deseas compartir
  commonProperty: string;
  commonMethod(): void;
}

export interface AvatarProps {
  name: string;
  urlAvatar: string;
}

export interface TextTypes {
  text: TextFieldTextType.TEXT;
  passwords: TextFieldTextType.PASSWORD;
}
