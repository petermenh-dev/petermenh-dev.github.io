import { StyledTabs } from './Tabs.styles';
import { TabsProps } from './Tabs.types';

export default function Tabs({ colorVariant = 'primary', ...props }: TabsProps) {
  return <StyledTabs colorVariant={colorVariant} {...props} />;
}
