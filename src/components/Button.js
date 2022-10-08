import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { defaultTheme, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 0.25rem;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 1rem 1.5rem;
  `,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `
};

const Button = styled.button`
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  min-width: 100px;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s linear, color 0.2s linear;
  font-family: 'Times New Roman', Times, serif;

  &:hover {
    color: ${defaultTheme.textColorOnPrimary};
    background-color: ${defaultTheme.primaryHoverColor};
  }

  &:focus {
    outline-offset: 2px;
    outline: 3px solid ${defaultTheme.primaryHoverColor};
  }

  &:active {
    color: ${defaultTheme.textColorOnPrimary};
    border-color: ${defaultTheme.primaryActiveColor};
    background-color: ${defaultTheme.primaryActiveColor};
  }
`

export const PrimaryButton = styled(Button)`
  border: none;
  color: white;
  background-color: ${defaultTheme.primaryColor};

  &:disabled {
    cursor: not-allowed;
    color: ${defaultTheme.textOnDisabled};
    background-color: ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    cursor: not-allowed;
    color: ${defaultTheme.disabled};
    background: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: none;
  background: none;

  &:disabled {
    cursor: not-allowed;
    color: ${defaultTheme.disabled};
    background: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;