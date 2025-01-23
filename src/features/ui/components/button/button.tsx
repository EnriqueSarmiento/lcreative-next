import { FC, MouseEventHandler } from 'react';
import { ButtonProps, Typography, styled, SxProps, Theme } from '@mui/material';
import LoadingButton from '@mui/material/Button';

import type { ButtonProps as LoadingButtonProps } from '@mui/material/Button';

import { theme as customTheme } from '@/theme';
import { Variant } from '@mui/material/styles/createTypography';
import { MUIColorsPalette } from '@/types/theme';

export type ButtonBaseProps = {
  text: string;
  onClick?: (e: MouseEventHandler<HTMLButtonElement>) => void;
  color?: MUIColorsPalette;
  extraClasses?: SxProps<Theme>;
  labelProps?: {
    variant?: Variant;
    labelClasses?: SxProps<Theme>;
  };
};

type ButtonPropsComponent = ButtonBaseProps &
  ButtonProps &
  LoadingButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

const ButtonComponent: FC<ButtonPropsComponent> = ({
  variant = 'contained',
  color = 'primary' as MUIColorsPalette,
  size = 'large',
  text,
  onClick,

  extraClasses,
  labelProps = {
    variant: 'button',
    labelClasses: {},
  },
  ...rest
}) => {
  const CustomButton = styled(LoadingButton)(({ theme }) => {
    const variantColor = color;
    const palette = customTheme.MUIColors[variantColor];

    const baseStyles = {
      display: 'inline-flex',
      borderRadius: '50px',
      textTransform: 'capitalize',
      width: 'auto',
    };
    const containedClasses: any = {
      backgroundColor: `${palette.main} !important`,
      '&:hover': {
        backgroundColor: `${palette.dark} !important`,
      },
      '&:disabled': {
        backgroundColor: `${customTheme.colors.dark300} !important`,
      },
    };

    const outlinedClasses = {
      borderColor: `${palette.main} !important`,
      borderWidth: '2px',
      color: `${palette.main} !important`,
      '&:hover': {
        borderColor: `${palette.dark} !important`,
        color: `${palette.dark} !important`,
        borderWidth: '2px',
      },
      '&:disabled': {
        borderColor: `${customTheme.colors.dark300} !important`,
        color: `${customTheme.colors.dark300} !important`,
        borderWidth: '2px',
      },
    };

    const textClasses = {
      color: `${palette.main} !important`,

      '&:hover': {
        color: `${palette.dark} !important`,
        backgroundColor: 'transparent',
      },
      '&:disabled': {
        color: `${customTheme.colors.dark300} !important`,
        backgroundColor: 'transparent',
      },
    };

    let variantClasses;
    switch (variant) {
      case 'contained':
        variantClasses = containedClasses;
        break;
      case 'outlined':
        variantClasses = outlinedClasses;
        break;
      case 'text':
        variantClasses = textClasses;
        break;
    }

    return {
      ...theme,
      ...baseStyles,
      ...variantClasses,
    };
  });

  return (
    <CustomButton
      variant={variant}
      color={color}
      size={size}
      disableElevation
      onClick={onClick}
      sx={extraClasses}
      // data-tooltip-id={tooltipId}
      // data-tooltip-content={tooltipContent}
      {...rest}
    >
      <Typography variant={labelProps.variant} sx={labelProps?.labelClasses}>
        {text}
      </Typography>
    </CustomButton>
  );
};

export default ButtonComponent;
