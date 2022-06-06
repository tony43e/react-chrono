import React, { useContext, useMemo } from 'react';
import { TimelineControlModel } from '../../../models/TimelineControlModel';
import { GlobalContext } from '../../GlobalContext';
import ChevronLeft from '../../icons/chev-left';
import ChevronRightIcon from '../../icons/chev-right';
import ChevronsLeftIcon from '../../icons/chevs-left';
import ChevronsRightIcon from '../../icons/chevs-right';
import ReplayIcon from '../../icons/replay-icon';
import {
  TimelineControlContainer,
  TimelineNavButton,
  TimelineNavItem,
  TimelineNavWrapper,
} from './timeline-control.styles';

const TimelineControl: React.FunctionComponent<TimelineControlModel> = ({
  onNext,
  onPrevious,
  onFirst,
  onLast,
  disableLeft,
  disableRight,
  slideShowRunning,
  onReplay,
  slideShowEnabled,
}: TimelineControlModel) => {
  const { mode, flipLayout, theme } = useContext(GlobalContext);

  const rotate = useMemo(() => mode !== 'HORIZONTAL', [mode]);

  const flippedHorizontally = useMemo(
    () => flipLayout && mode === 'HORIZONTAL',
    [],
  );
  return (
    <TimelineControlContainer
      slideShowActive={slideShowRunning}
      flip={flippedHorizontally}
    >
      <TimelineNavWrapper className="timeline-controls">
        {/* jump to first */}
        <TimelineNavItem disable={disableLeft}>
          <TimelineNavButton
            mode={mode}
            theme={theme}
            onClick={flippedHorizontally ? onLast : onFirst}
            title="Go to First"
            aria-label="first"
            aria-disabled={disableLeft}
            aria-controls="timeline-main-wrapper"
            tabIndex={!disableLeft ? 0 : -1}
            rotate={rotate ? 'TRUE' : 'FALSE'}
          >
            <ChevronsLeftIcon />
          </TimelineNavButton>
        </TimelineNavItem>

        {/* previous */}
        <TimelineNavItem disable={disableLeft}>
          <TimelineNavButton
            mode={mode}
            theme={theme}
            onClick={flippedHorizontally ? onNext : onPrevious}
            title="Previous"
            aria-label="previous"
            aria-disabled={disableLeft}
            aria-controls="timeline-main-wrapper"
            tabIndex={!disableLeft ? 0 : -1}
            rotate={rotate ? 'TRUE' : 'FALSE'}
          >
            <ChevronLeft />
          </TimelineNavButton>
        </TimelineNavItem>

        {/* next */}
        <TimelineNavItem disable={disableRight}>
          <TimelineNavButton
            mode={mode}
            theme={theme}
            onClick={flippedHorizontally ? onPrevious : onNext}
            title="Next"
            aria-label="next"
            aria-disabled={disableRight}
            aria-controls="timeline-main-wrapper"
            rotate={rotate ? 'TRUE' : 'FALSE'}
            tabIndex={!disableRight ? 0 : -1}
          >
            <ChevronRightIcon />
          </TimelineNavButton>
        </TimelineNavItem>

        {/* jump to last */}
        <TimelineNavItem disable={disableRight}>
          <TimelineNavButton
            mode={mode}
            theme={theme}
            onClick={flippedHorizontally ? onFirst : onLast}
            title="Go to Last"
            aria-label="last"
            aria-disabled={disableRight}
            aria-controls="timeline-main-wrapper"
            tabIndex={!disableRight ? 0 : -1}
            rotate={rotate ? 'TRUE' : 'FALSE'}
          >
            <ChevronsRightIcon />
          </TimelineNavButton>
        </TimelineNavItem>

        {/* slideshow button */}
        <TimelineNavItem>
          {slideShowEnabled && (
            <TimelineNavButton
              theme={theme}
              onClick={onReplay}
              title="Play Slideshow"
              tabIndex={0}
              aria-controls="timeline-main-wrapper"
              aria-label="Play Slideshow"
            >
              <ReplayIcon />
            </TimelineNavButton>
          )}
        </TimelineNavItem>
      </TimelineNavWrapper>
    </TimelineControlContainer>
  );
};

TimelineControl.displayName = 'Timeline Control';

export default TimelineControl;
