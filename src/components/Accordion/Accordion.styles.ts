import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  borderRadius: `${theme.customBorderRadius?.slightlyRound ?? theme.shape.borderRadius}px !important`,
  marginBottom: theme.spacing(1),
  '&:before': { display: 'none' },
  boxShadow: theme.shadows[1],
}));

export const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  '& .MuiAccordionSummary-content': {
    margin: `${theme.spacing(1.5)} 0`,
  },
}));

export const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop: 0,
  color: theme.palette.text.secondary,
}));
