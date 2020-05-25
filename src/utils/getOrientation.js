export function getOrientation(aspectRatio) {
  let orientation = "square"

  if (aspectRatio > 1) {
    orientation = "landscape"
  } else if (aspectRatio < 1) {
    orientation = "portrait"
  }

  return orientation
}
