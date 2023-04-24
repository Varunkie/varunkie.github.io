/**
 * String tools module.
 * @module tools/string
 */

/**
 * Returns given string valid to insert into a hyperlink.
 */
export const urlify = (value) => {
  return value ? value.toLowerCase().replace(/\s/g, '-') : '';
}

/**
 * Capitalize the first letter of each word.
 */
export const capitalize = (string) => {
  const array = string.split(" ");
  for (var i = 0; i < array.length; i++) 
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  return array.join(" ");
};
