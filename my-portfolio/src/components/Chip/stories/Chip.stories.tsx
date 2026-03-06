
import Chip from '../Chip';
import type { ChipProps } from '../Chip.types';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    colorVariant: { control: 'text' },
    sizeVariant: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template = (args: ChipProps) => (
  <Stack direction="row" spacing={2} alignItems="center" bgcolor="#f5f5f5" p={2}>
    <Chip {...args} label={args.label || 'Default'} />
    <Chip {...args} label={args.label || 'With Avatar'} avatar={<span style={{fontWeight:'bold'}}>A</span>} />
    <Chip {...args} label={args.label || 'Deletable'} onDelete={() => {}} />
  </Stack>
);

export const Default = () => <Template colorVariant="primary" sizeVariant="medium" label="Chip" />;
export const Outlined = () => <Template colorVariant="secondary" sizeVariant="small" label="Outlined" variant="outlined" />;
