export function getOrigin(window: Window) {
  if (window.location.origin) {
    return window.location.origin;
  }

  return (
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "")
  );
}
