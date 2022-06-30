export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('coengageui-scroll-lock', '');

  return tag;
}
