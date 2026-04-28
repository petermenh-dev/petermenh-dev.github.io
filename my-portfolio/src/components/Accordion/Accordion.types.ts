import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';

export interface AccordionItem {
  id: string;
  summary: string;
  detail: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends Omit<MuiAccordionProps, 'children'> {
  items: AccordionItem[];
  allowMultiple?: boolean;
}
