import React, { forwardRef } from 'react';
import {
  getDefaultZIndex,
  ForwardRefWithStaticComponents,
  useCoengageUIDefaultProps,
} from '@coengageui/styles';
import {
  HorizontalSection,
  HorizontalSectionSharedProps,
} from '../HorizontalSection/HorizontalSection';

export interface AsideProps
  extends HorizontalSectionSharedProps,
  React.ComponentPropsWithRef<'nav'> {
  /** Aside content */
  children: React.ReactNode;
}

type AsideComponent = ForwardRefWithStaticComponents<
  AsideProps,
  { Section: typeof HorizontalSection.Section }
>;

const defaultProps: Partial<AsideProps> = {
  fixed: false,
  position: { top: 0, right: 0 },
  zIndex: getDefaultZIndex('app'),
  hiddenBreakpoint: 'md',
  hidden: false,
};

export const Aside: AsideComponent = forwardRef<HTMLElement, AsideProps>(
  (props: AsideProps, ref) => {
    const _props = useCoengageUIDefaultProps('Aside', defaultProps, props);
    return <HorizontalSection section="aside" __staticSelector="Aside" ref={ref} {..._props} />;
  }
) as any;

Aside.Section = HorizontalSection.Section;
Aside.displayName = '@coengageui/core/Aside';
