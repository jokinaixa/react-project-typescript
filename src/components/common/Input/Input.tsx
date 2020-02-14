import * as React from 'react';

import { InputWrapper, StyledInput } from './Input.styles';

export type IconTypeName = 'euro' | 'porcentaje' | 'puntos';

interface Props {
  name: string;
  type: 'text' | 'number' | 'password' | 'tel' | 'email';
  value?: string | number;
  defaultValue?: string | number;
  size?: 'large' | 'xlarge' | '120';
  maxLength?: number;
  placeholder?: React.ReactNode;
  helpMessage?: React.ReactNode;
  messageNoWrap?: boolean;
  mobileCentered?: boolean;
  errorMessage?: React.ReactNode;
  icon?: IconTypeName;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
}

export const Input: React.SFC<Props> = ({
  helpMessage,
  errorMessage,
  icon,
  messageNoWrap,
  size,
  disabled = false,
  mobileCentered,
  ...props
}) => {
  return (
    <InputWrapper>
      <StyledInput error={true} />
    </InputWrapper>
  );
};
