/**
 * Slide-in right sidebar for live theme customization.
 * Uses useThemeCustomization() to read/write settings; changes apply site-wide instantly.
 */

import React from 'react';
import {
  Box,
  Divider,
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
import Drawer from '../Drawer';
import { useThemeCustomization } from '../../theme/ThemeCustomizationProvider';
import { AVAILABLE_FONTS } from '../../theme/customization';
import type { ThemeCustomizerPanelProps } from './ThemeCustomizerPanel.types';

// ─── Internal layout helpers ──────────────────────────────────────────────────

/** Consistent labeled wrapper for each control row. */
function ControlRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
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

/** Native color picker paired with a hex readout label. */
function ColorControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (hex: string) => void;
}) {
  return (
    <ControlRow label={label}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          component="input"
          type="color"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          sx={{
            width: 48,
            height: 48,
            border: '2px solid',
            borderColor: 'divider',
            borderRadius: 1,
            cursor: 'pointer',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        />
        <Typography
          variant="body2"
          sx={{ fontFamily: 'monospace', color: 'text.secondary' }}
        >
          {value}
        </Typography>
      </Box>
    </ControlRow>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export default function ThemeCustomizerPanel({
  open,
  onClose,
}: ThemeCustomizerPanelProps) {
  const { settings, updateSetting, resetSettings } = useThemeCustomization();

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose()} width={320}>
      {/* ── Header ── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '2px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Theme Customizer
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Tooltip title="Reset all to defaults">
            <IconButton
              size="small"
              onClick={resetSettings}
              aria-label="Reset theme to defaults"
            >
              ↺
            </IconButton>
          </Tooltip>
          <IconButton
            size="small"
            onClick={onClose}
            aria-label="Close theme customizer"
          >
            ✕
          </IconButton>
        </Box>
      </Box>

      {/* ── Controls ── */}
      <Box sx={{ p: 2.5, overflowY: 'auto' }}>
        {/* Color Mode */}
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
            <ToggleButton value="light" aria-label="Light mode">
              ☀ Light
            </ToggleButton>
            <ToggleButton value="dark" aria-label="Dark mode">
              🌙 Dark
            </ToggleButton>
          </ToggleButtonGroup>
        </ControlRow>

        <Divider sx={{ my: 2 }} />

        {/* Colors */}
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

        <Divider sx={{ my: 2 }} />

        {/* Border Radius */}
        <ControlRow label="Border Radius">
          <Slider
            value={settings.borderRadiusScale}
            onChange={(_, value) =>
              updateSetting('borderRadiusScale', value as number)
            }
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

        {/* Font Family */}
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

        {/* Base Font Size */}
        <ControlRow label={`Base Font Size: ${settings.baseFontSize}px`}>
          <Slider
            value={settings.baseFontSize}
            onChange={(_, value) =>
              updateSetting('baseFontSize', value as number)
            }
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

        {/* Spacing Scale */}
        <ControlRow label={`Spacing Unit: ${settings.spacingScale}px`}>
          <Slider
            value={settings.spacingScale}
            onChange={(_, value) =>
              updateSetting('spacingScale', value as number)
            }
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

        <Divider sx={{ my: 2 }} />

        {/* Invert Colors */}
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
      </Box>
    </Drawer>
  );
}
