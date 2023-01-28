const hsv = require("rgb-hsv");

// Convert an RGB color value into an HSV color value
function convertRGBtoHSV(rgb) 
{
    let h = [];
    if(rgb[0]>255|| rgb[0]<0|| rgb[1]>255|| rgb[1]<0||rgb[2]>255||rgb[2]<0)
        {console.log("1",rgb);
            return false;}

    else if(rgb[0]==null||rgb[1]==null||rgb[2]==null)
        {console.log("2",rgb);
            return false;}
        
    
    h = hsv(rgb[0],rgb[1],rgb[2]);
    console.log("3",h);
    return h;

}

module.exports = convertRGBtoHSV;
