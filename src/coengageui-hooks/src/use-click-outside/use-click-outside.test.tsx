import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useClickOutside } from './use-click-outside';

// dummy Target element to test against
interface IuseClickOutsideProps {
  handler: () => void;
  events?: string[] | null;
  nodes?: HTMLElement[];
}

const Target: React.FunctionComponent<IuseClickOutsideProps> = ({ handler, events, nodes }) => {
  const ref = useClickOutside(handler, events, nodes);
  return <div data-testid="target" ref={ref} />;
};

describe('coengageui_hooks/use-click-outside', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `handler` function when clicked outside target (no `events` given)', () => {
    const handler = jest.fn();
    render(
      <>
        <Target handler={handler} />
        <div data-testid="outside-target" />
      </>
    );
    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');
    //baseline
    expect(handler).toHaveBeenCalledTimes(0);

    userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(0);

    userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(1);

    userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(2);

    userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('calls `handler` only on given `events`', () => {
    const handler = jest.fn();
    const events = ['keydown'];
    render(
      <>
        <Target handler={handler} events={events} />
        <div data-testid="outside-target" />
      </>
    );
    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    // ignore default events
    userEvent.click(target);
    userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(0);

    // use custom events
    userEvent.type(target, '{enter}');
    userEvent.type(outsideTarget, '{enter}');
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('ignores clicks outside the given `nodes`', () => {
    const handler = jest.fn();

    const Wrapper: React.FunctionComponent = () => {
      const [ignore, setIgnore] = useState(null);
      return (
        <>
          <Target handler={handler} nodes={[ignore]} />
          <div data-testid="ignore-clicks" ref={setIgnore} />
        </>
      );
    };

    render(
      <div>
        <Wrapper />
      </div>
    );
    const ignoreClicks = screen.getByTestId('ignore-clicks');
    userEvent.click(ignoreClicks);
    expect(handler).toHaveBeenCalledTimes(0);

    // Remark: click on target should trigger handler, since it is not in `nodes`
    const target = screen.getByTestId('target');
    userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
