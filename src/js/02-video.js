import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player'); //? ініціалізація працює без querySelector та '#' (для id)

player.on('timeupdate', throttle(onPlay, 1000));

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onPlay(data) {
  const currentTime = data.seconds;

  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
}

const savedTime = Number(localStorage.getItem(LOCALSTORAGE_KEY)); //? працює і без Number хоча за документацією setCurrentTime приймає number як параметр

player.setCurrentTime(savedTime || 0);
