import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player'); //?

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}

const savedTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(savedTime);
