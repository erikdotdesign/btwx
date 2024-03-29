/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, ReactElement } from 'react';
import tinyColor from 'tinycolor2';
import styled from 'styled-components';
import { ThemeContext } from './ThemeProvider';
import Icon from './Icon';

export interface TopbarDropdownButtonOptionProps {
  onClick(event: React.SyntheticEvent): void;
  isActive?: boolean;
  disabled?: boolean;
  icon?: string;
  size?: Btwx.SizeVariant;
  bottomDivider?: boolean;
  checkbox?: boolean;
  label: string;
}

const Button = styled.button<TopbarDropdownButtonOptionProps>`
  background: ${props => !props.checkbox && props.isActive ? tinyColor(props.theme.text.lightest).setAlpha(0.15).toRgbString() : 'none'};
  .c-topbar-dropdown-button__icon {
    svg {
      fill: ${props => props.theme.text.lighter};
    }
  }
  .c-topbar-dropdown-button__icon--checkbox {
    svg {
      fill: ${props => props.isActive ? props.theme.palette.primary : props.theme.text.lighter};
    }
  }
  .c-topbar-dropdown-button__label {
    color: ${props => props.theme.text.base};
  }
  :after {
    background: ${props => props.theme.text.lightest};
  }
  :disabled {
    background: none;
    opacity: 0.5;
    cursor: default;
    .c-topbar-dropdown-button__icon {
      svg {
        fill: ${props => props.theme.text.lighter};
      }
    }
    .c-topbar-dropdown-button__label {
      color: ${props => props.theme.text.lighter};
    }
  }
  :hover {
    background: ${props => props.theme.palette.primary};
    .c-topbar-dropdown-button__icon {
      svg {
        fill: ${props => props.theme.text.onPalette.primary};
      }
    }
    .c-topbar-dropdown-button__label {
      color: ${props => props.theme.text.onPalette.primary};
    }
    :disabled {
      background: none;
      .c-topbar-dropdown-button__icon {
        svg {
          fill: ${props => props.theme.text.lighter};
        }
      }
      .c-topbar-dropdown-button__label {
        color: ${props => props.theme.text.lighter};
      }
    }
  }
`;

const TopbarDropdownButtonOption = (props: TopbarDropdownButtonOptionProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { label, icon, bottomDivider, checkbox, isActive, size } = props;

  return (
    <Button
      className={`c-topbar-dropdown-button__option ${!icon && !checkbox ? 'c-topbar-dropdown-button__option--text' : null} ${bottomDivider ? 'c-topbar-dropdown-button__option--bottom-divider' : null}`}
      {...props}
      theme={theme}>
      {
        icon
        ? <span className='c-topbar-dropdown-button__icon'>
            <Icon
              name={icon}
              size={size} />
          </span>
        : null
      }
      <span className='c-topbar-dropdown-button__label'>
        {label}
      </span>
      {
        checkbox
        ? <span className='c-topbar-dropdown-button__icon c-topbar-dropdown-button__icon--checkbox'>
            <Icon
              name={isActive ? 'checkbox-checked' : 'checkbox-unchecked'}
              size='small' />
          </span>
        : null
      }
    </Button>
  );
}

export default TopbarDropdownButtonOption;