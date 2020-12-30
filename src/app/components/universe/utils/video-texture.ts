const videoCreation = (id: string, video: any): HTMLVideoElement => {
  const videoEl = document.createElement('video');
  videoEl.id = id;
  videoEl.src = video;
  videoEl.autoplay = true;
  videoEl.loop = true;
  videoEl.style.display = 'none';
  return videoEl;
}