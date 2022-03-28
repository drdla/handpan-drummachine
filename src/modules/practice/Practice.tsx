import clsx from 'clsx';
import {useCallback, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components/macro';

import {DrumMachine} from '~/modules/drum-machine';

import {Box} from '~/components';

import {i18n} from '~/lib';

import {learningSteps} from '../learning-path/learningSteps';
import {useModal} from '../modals';

const VideoPlayer = styled(Box)`
  /*
   * 1 - Allow space for Nav Row at top of page.
   */

  align-items: center;
  aspect-ratio: 16/9;
  background: ${({theme}) => theme.color.background.darkest};
  cursor: pointer;
  justify-content: center;
  left: 0;
  padding: ${({theme}) => theme.size.default};
  position: absolute;
  top: calc(${({theme}) => theme.size.default} * 3); /* 1 */
  transform-origin: 0 0;
  transition: all ${({theme}) => theme.transition.time.medium} ${({theme}) => theme.transition.style.dynamic} 0ms;
  width: 100%;
  z-index: ${({theme}) => theme.zIndex.overlaid1};

  &.is-collapsed {
    padding: 0;
    transform: scale(10%);
    transition: all ${({theme}) => theme.transition.time.medium} ${({theme}) => theme.transition.style.dynamic}
      ${({theme}) => theme.transition.time.verySlow};
    z-index: ${({theme}) => theme.zIndex.base};
  }
`;

const NavRow = styled(Box)`
  align-items: center;
  height: calc(${({theme}) => theme.size.default} * 3);
  justify-content: space-between;
`;

export const Practice = () => {
  const urlParams = useParams();
  const navigate = useNavigate();
  const [collapsed, toggleVideoPlayer] = useState(false);
  const handlePlayback = useCallback(
    (event: 'start' | 'stop' | 'end') => toggleVideoPlayer(['stop', 'end'].includes(event)),
    []
  );

  const currentLearningStep = learningSteps.find(({id}) => id === urlParams.exerciseId);
  const exerciseName = currentLearningStep?.details;
  const videoId = currentLearningStep?.videoId;

  const showModal = useModal((state) => state.show);
  const handleEndExercise = useCallback(() => {
    showModal(
      'Eigenen Lernstand bewerten (1-5), ggf. Lernzeit erfassen.',
      i18n.t('End practicing "{{exerciseName}}"', {exerciseName}),
      () => navigate('/learning-path')
    );
  }, [exerciseName, showModal]);

  return (
    <>
      <NavRow>
        <Link to="/learning-path">{i18n.t('Back to learning path')}</Link>
        <div>
          <a onClick={handleEndExercise}>{i18n.t('End practicing "{{exerciseName}}"', {exerciseName})}</a>
        </div>
      </NavRow>
      <VideoPlayer className={clsx({'is-collapsed': collapsed})} onClick={() => toggleVideoPlayer(!collapsed)}>
        <YouTube
          id="video-player"
          videoId={videoId}
          opts={{height: '780', width: '1280'}}
          onPlay={() => handlePlayback('start')}
          onPause={() => handlePlayback('stop')}
          onEnd={() => handlePlayback('end')}
          // onReady={func} // defaults -> noop
          // onError={func} // defaults -> noop
          // onStateChange={func} // defaults -> noop
        />
      </VideoPlayer>
      <DrumMachine />
    </>
  );
};
