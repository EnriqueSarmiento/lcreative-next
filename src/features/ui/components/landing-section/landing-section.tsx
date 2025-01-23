import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type LandingSectionProps = PropsWithChildren & {
  title: string;
  id: string;
  style?: string;
};
export default function LandingSection({
  children,
  id,
  title,
  style,
}: LandingSectionProps) {
  return (
    <div className={`w-full px-6 py-4 ${style}`} id={id}>
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      {children}
    </div>
  );
}
