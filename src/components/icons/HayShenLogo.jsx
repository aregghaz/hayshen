import { ReactComponent as NewLogo } from '@/assets/icons/newLogo.svg';

export const HayShenLogo = ({
  width = 220,
  height = 50,
  color = 'currentColor',
  ...props
}) => (
  <NewLogo
    width={width}
    height={height}
    color={color}
    role="img"
    aria-label="HayShen"
    {...props}
  />
);
