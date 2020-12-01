export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play()
    if (playPromise !== null) {
      playPromise.then(audio => {
        audioRef.current.play()
      })
    }
  }
}
