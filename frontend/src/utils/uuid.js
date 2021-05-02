/**
 * Based on the rfc4122-compliant solution posted at
 * http://stackoverflow.com/questions/105034
 *
 * @return Generates a unique string ID.
 */
export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
