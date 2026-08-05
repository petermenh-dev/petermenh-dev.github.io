/**
 * Floating left sidebar for live theme customization.
 * Always visible as a 56px toggle strip; expands to full panel on demand.
 * No backdrop — clicking outside does not collapse it.
 */

import React from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useThemeCustomization } from '../../theme/ThemeCustomizationProvider';
import { AVAILABLE_FONTS } from '../../theme/customization';

export const THEME_CUSTOMIZER_STRIP_WIDTH = 56;
const PANEL_WIDTH = 280; // expanded panel portion (total visible = STRIP_WIDTH + PANEL_WIDTH)

// ─── Internal layout helpers ──────────────────────────────────────────────────

/** Consistent labeled wrapper for each control row. */
function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          fontWeight: 600,
          mb: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'text.secondary',
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

/** Native color picker paired with a hex readout label. Debounces theme updates to avoid lag. */
function ColorControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (hex: string) => void;
}) {
  const [localValue, setLocalValue] = React.useState(value);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync when external value changes (e.g. reset)
  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (hex: string) => {
    setLocalValue(hex);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onChange(hex), 80);
  };

  return (
    <ControlRow label={label}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          component="input"
          type="color"
          value={localValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          sx={{
            width: 40,
            height: 40,
            border: '2px solid',
            borderColor: 'divider',
            borderRadius: 1,
            cursor: 'pointer',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        />
        <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
          {localValue}
        </Typography>
      </Box>
    </ControlRow>
  );
}

/** Reusable expandable section component */
function ExpandableSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          mb: open ? 2 : 0,
        }}
        onClick={() => setOpen(!open)}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}
        >
          {title}
        </Typography>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      {open && <Box>{children}</Box>}
    </Box>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export default function ThemeCustomizerPanel() {
  const [expanded, setExpanded] = React.useState(false);
  const { settings, updateSetting, resetSettings } = useThemeCustomization();

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        height: '100vh',
        display: 'flex',
        flexShrink: 0,
        alignSelf: 'flex-start',
        width: expanded ? THEME_CUSTOMIZER_STRIP_WIDTH + PANEL_WIDTH : THEME_CUSTOMIZER_STRIP_WIDTH,
        transition: 'width 0.25s ease, box-shadow 0.25s ease',
        boxShadow: expanded ? 4 : 1,
        zIndex: 100,
      }}
    >
      {/* ── Toggle strip — always visible at 56px ── */}
      <Box
        sx={{
          width: THEME_CUSTOMIZER_STRIP_WIDTH,
          flexShrink: 0,
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 1,
        }}
      >
        <Tooltip title={expanded ? 'Collapse' : 'Customize Theme'} placement="right">
          <IconButton
            onClick={() => setExpanded(v => !v)}
            aria-label={expanded ? 'Collapse theme customizer' : 'Open theme customizer'}
          >
            {expanded ? <ChevronLeftIcon /> : <PaletteIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* ── Sliding controls panel ── */}
      <Box
        sx={{
          width: expanded ? PANEL_WIDTH : 0,
          overflow: 'hidden',
          transition: 'width 0.25s ease',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ width: PANEL_WIDTH, display: 'flex', flexDirection: 'column', height: '100%' }}>

          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1,
              borderBottom: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
              position: 'sticky',
              top: 0,
              zIndex: 1,
              flexShrink: 0,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
              Theme Settings
            </Typography>
            <Tooltip title="Reset all to defaults">
              <IconButton size="small" onClick={resetSettings} aria-label="Reset theme to defaults">
                <RestartAltIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Scrollable controls */}
          <Box sx={{ p: 2.5, overflowY: 'auto', flex: 1 }}>

            <ExpandableSection title="Global">
              <ControlRow label="Color Mode">
                <ToggleButtonGroup
                  value={settings.mode}
                  exclusive
                  onChange={(_, value: 'light' | 'dark') => {
                    if (value) updateSetting('mode', value);
                  }}
                  size="small"
                  fullWidth
                  aria-label="Color mode"
                >
                  <ToggleButton value="light" aria-label="Light mode">☀ Light</ToggleButton>
                  <ToggleButton value="dark" aria-label="Dark mode">🌙 Dark</ToggleButton>
                </ToggleButtonGroup>
              </ControlRow>
              <ColorControl
                label="Primary Color"
                value={settings.primaryColor}
                onChange={v => updateSetting('primaryColor', v)}
              />
              <ColorControl
                label="Background Color"
                value={settings.backgroundColor}
                onChange={v => updateSetting('backgroundColor', v)}
              />
              <ColorControl
                label="Text Color"
                value={settings.textColor}
                onChange={v => updateSetting('textColor', v)}
              />
              <ControlRow label="Border Radius">
                <Slider
                  value={settings.borderRadiusScale}
                  onChange={(_, value) => updateSetting('borderRadiusScale', value as number)}
                  min={0}
                  max={3}
                  step={0.25}
                  marks={[
                    { value: 0, label: 'None' },
                    { value: 1, label: 'Default' },
                    { value: 3, label: 'Round' },
                  ]}
                  aria-label="Border radius scale"
                />
              </ControlRow>
            </ExpandableSection>

            <ExpandableSection title="Button">
              <ColorControl
                label="Button Text Color"
                value={settings.buttonTextColor}
                onChange={v => updateSetting('buttonTextColor', v)}
              />
            </ExpandableSection>

            <ExpandableSection title="Typography">
              <ControlRow label="Font Family">
                <FormControl fullWidth size="small">
                  <InputLabel>Font</InputLabel>
                  <Select
                    value={settings.fontFamily}
                    label="Font"
                    onChange={e => updateSetting('fontFamily', e.target.value as string)}
                  >
                    {AVAILABLE_FONTS.map(font => (
                      <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                        {font}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </ControlRow>
              <ControlRow label={`Base Font Size: ${settings.baseFontSize}px`}>
                <Slider
                  value={settings.baseFontSize}
                  onChange={(_, value) => updateSetting('baseFontSize', value as number)}
                  min={12}
                  max={20}
                  step={1}
                  marks={[
                    { value: 12, label: '12' },
                    { value: 16, label: '16' },
                    { value: 20, label: '20' },
                  ]}
                  aria-label="Base font size"
                />
              </ControlRow>
              <ControlRow label={`Spacing Unit: ${settings.spacingScale}px`}>
                <Slider
                  value={settings.spacingScale}
                  onChange={(_, value) => updateSetting('spacingScale', value as number)}
                  min={4}
                  max={16}
                  step={2}
                  marks={[
                    { value: 4, label: '4' },
                    { value: 8, label: '8' },
                    { value: 16, label: '16' },
                  ]}
                  aria-label="Spacing scale"
                />
              </ControlRow>
            </ExpandableSection>

            <ExpandableSection title="Advanced">
              <ControlRow label="Invert Colors">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Switch
                    checked={settings.invertColors}
                    onChange={e => updateSetting('invertColors', e.target.checked)}
                    inputProps={{ 'aria-label': 'Invert colors' }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {settings.invertColors ? 'On' : 'Off'}
                  </Typography>
                </Box>
              </ControlRow>
            </ExpandableSection>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
