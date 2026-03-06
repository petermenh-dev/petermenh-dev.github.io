
import Link from '../Link';
import type { LinkProps } from '../Link.types';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    colorVariant: { control: 'text' },
    underlineVariant: { control: 'text' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args: LinkProps) => (
  <Stack direction="row" spacing={2} alignItems="center" bgcolor="#f5f5f5" p={2}>
    <Link {...args} href={args.href || '#'}>
      {args.children || 'Default Link'}
    </Link>
    <Link {...args} href={args.href || '#'} underlineVariant="hover">
      {args.children || 'Hover Underline'}
    </Link>
    <Link {...args} href={args.href || '#'} underlineVariant="always">
      {args.children || 'Always Underline'}
    </Link>
  </Stack>
);

export const Default = () => <Template colorVariant="primary" underlineVariant="none" href="#" children="Link" />;
