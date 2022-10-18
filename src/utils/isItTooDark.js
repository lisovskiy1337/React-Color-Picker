const isItTooDark = (rgbArr) => {
    const luma = 0.2126 * rgbArr[0] + 0.7152 * rgbArr[1] + 0.0722 * rgbArr[2];
    return luma < 120 ?  '#000' : '#fff'
}

export default isItTooDark;