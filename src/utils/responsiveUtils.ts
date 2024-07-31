export const responsiveWidth = (width: number) => {
    return `${(width / 1440) * 100}vw`;
  };
  
  export const responsiveHeight = (height: number) => {
    return `${(height / 900) * 100}vh`;
  };
  
  export const responsiveFontSize = (fontSize: number) => {
    return `${(fontSize / 16) * 1}rem`;
  };