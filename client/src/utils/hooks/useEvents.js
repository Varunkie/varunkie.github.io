/**
 * Events hooks module.
 * @module hooks/events
 */

import { useRef } from 'react';

/**
 * Returns an MouseDown and MouseUp events.
 */
export const useMouseClick = (trigger) => {
  const container = useRef();
  const ref = useRef();

  const onMouseDown = e => {
    if (e.target === container.current) ref.current = e.target;
  };

  const onMouseUp = e => { 
    if (e.target === ref.current && trigger) trigger(); 
    ref.current = null;
  };

  const events = { onMouseDown, onMouseUp };
  return [container, events];
};
