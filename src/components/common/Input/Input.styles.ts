import { IconTypeName } from './Input';
import { colors } from '../theme/colors';
import styled from "styled-components";

interface Props {
  error?: boolean;
  icon?: IconTypeName;
  mobileCentered?: boolean;
}

export const InputWrapper = styled.div.attrs({})<Props>``;

export const StyledInput = styled.input.attrs({})<Props>`
  border-radius: 4px;
  border-color: ${p => (p.error ? colors.rojo : colors.magenta)};
`;