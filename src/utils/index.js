/**
 *
 * Receives a color and makes it lighter or darker
 *
 * @param {String} color         The color that will be transformed.
 * @param {String} percentage    If negative the color will get darker, if positive, the color will get lighter
 *
 * @return {String} The new color.
 */
const lightenDarkenColor = (color, percentage) => {
    var usePound = false

    if (color[0] === '#') {
        color = color.slice(1)
        usePound = true
    }

    var num = parseInt(color, 16)

    var r = (num >> 16) + percentage

    if (r > 255) r = 255
    else if (r < 0) r = 0

    var b = ((num >> 8) & 0x00ff) + percentage

    if (b > 255) b = 255
    else if (b < 0) b = 0

    var g = (num & 0x0000ff) + percentage

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export { lightenDarkenColor }
export { default as fakeApi } from './fakeApi'
