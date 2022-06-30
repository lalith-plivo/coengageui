import React, { forwardRef, useRef, useState, useCallback } from 'react';
import { clamp, useMergedRef, useMove, useUncontrolled } from 'coengageui_hooks';
import {
  DefaultProps,
  CoengageUIColor,
  CoengageUINumberSize,
  useCoengageUIDefaultProps,
  useCoengageUITheme,
} from 'coengageui_styles';
import { CoengageUITransition } from '../../Transition';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import { Track, TrackStylesNames } from '../Track/Track';
import { MarksStylesNames } from '../Marks/Marks';
import { SliderRoot, SliderRootStylesNames } from '../SliderRoot/SliderRoot';

export type SliderStylesNames =
  | SliderRootStylesNames
  | ThumbStylesNames
  | TrackStylesNames
  | MarksStylesNames;

export interface SliderProps
  extends DefaultProps<SliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Color from theme.colors */
  color?: CoengageUIColor;

  /** Track border-radius from theme or number to set border-radius in px */
  radius?: CoengageUINumberSize;

  /** Predefined track and thumb size, number to set sizes in px */
  size?: CoengageUINumberSize;

  /** Minimal possible value */
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows */
  step?: number;

  /** Amount of digits after the decimal point */
  precision?: number;

  /** Current value for controlled slider */
  value?: number;

  /** Default value for uncontrolled slider */
  defaultValue?: number;

  /** Called each time value changes */
  onChange?(value: number): void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: number): void;

  /** Hidden input name, use with uncontrolled variant */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition */
  labelTransition?: CoengageUITransition;

  /** Label appear/disappear transition duration in ms */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
  labelTransitionTimingFunction?: string;

  /** If true label will be not be hidden when user stops dragging */
  labelAlwaysOn?: boolean;

  /** Thumb aria-label */
  thumbLabel?: string;

  /** If true slider label will appear on hover */
  showLabelOnHover?: boolean;

  /** Thumb children, can be used to add icon */
  thumbChildren?: React.ReactNode;

  /** Disables slider */
  disabled?: boolean;
}

const defaultProps: Partial<SliderProps> = {
  size: 'md',
  radius: 'xl',
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransition: 'skew-down',
  labelTransitionDuration: 0,
  labelAlwaysOn: false,
  thumbLabel: '',
  showLabelOnHover: true,
  disabled: false,
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props: SliderProps, ref) => {
  const {
    classNames,
    styles,
    color,
    value,
    onChange,
    onChangeEnd,
    size,
    radius,
    min,
    max,
    step,
    precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransition,
    labelTransitionDuration,
    labelTransitionTimingFunction,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    ...others
  } = useCoengageUIDefaultProps('Slider', defaultProps, props);

  const theme = useCoengageUITheme();
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === 'number' ? clamp({ value, min, max }) : value,
    defaultValue:
      typeof defaultValue === 'number' ? clamp({ value: defaultValue, min, max }) : defaultValue,
    finalValue: clamp({ value: 0, min, max }),
    rule: (val) => typeof val === 'number',
    onChange,
  });

  const valueRef = useRef(_value);
  const thumb = useRef<HTMLDivElement>();
  const position = getPosition({ value: _value, min, max });
  const _label = typeof label === 'function' ? label(_value) : label;

  const handleChange = useCallback(
    ({ x }: { x: number }) => {
      if (!disabled) {
        const nextValue = getChangeValue({ value: x, min, max, step, precision });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision]
  );

  const { ref: container, active } = useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd?.(valueRef.current) },
    theme.dir
  );

  const handleThumbMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (event.cancelable) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.nativeEvent.code) {
        case 'ArrowUp': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = Math.min(Math.max(_value + step, min), max);
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = Math.min(
            Math.max(theme.dir === 'rtl' ? _value - step : _value + step, min),
            max
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = Math.min(Math.max(_value - step, min), max);
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current.focus();
          const nextValue = Math.min(
            Math.max(theme.dir === 'rtl' ? _value + step : _value - step, min),
            max
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  return (
    <SliderRoot
      {...others}
      size={size}
      ref={useMergedRef(container, ref)}
      onKeyDownCapture={handleTrackKeydownCapture}
      onMouseDownCapture={() => container.current?.focus()}
      classNames={classNames}
      styles={styles}
      disabled={disabled}
    >
      <Track
        offset={0}
        filled={position}
        marks={marks}
        size={size}
        radius={radius}
        color={color}
        min={min}
        max={max}
        value={_value}
        onChange={setValue}
        onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
        onMouseLeave={showLabelOnHover ? () => setHovered(false) : undefined}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
      >
        <Thumb
          max={max}
          min={min}
          value={_value}
          position={position}
          dragging={active}
          color={color}
          size={size}
          label={_label}
          ref={thumb}
          onMouseDown={handleThumbMouseDown}
          labelTransition={labelTransition}
          labelTransitionDuration={labelTransitionDuration}
          labelTransitionTimingFunction={labelTransitionTimingFunction}
          labelAlwaysOn={labelAlwaysOn}
          classNames={classNames}
          styles={styles}
          thumbLabel={thumbLabel}
          showLabelOnHover={showLabelOnHover && hovered}
          disabled={disabled}
        >
          {thumbChildren}
        </Thumb>
      </Track>

      <input type="hidden" name={name} value={_value} />
    </SliderRoot>
  );
});

Slider.displayName = 'coengageui_core/Slider';
