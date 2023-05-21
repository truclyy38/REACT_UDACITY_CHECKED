import snow from '../images/snow.jpg';
import tyler from '../images/tyler.jpg';
import leaf from '../images/leaf.jpg';
const Image = ({ url, w }) => {
  const switchUrl = (url) => {
    switch (url) {
      case '../../images/snow.jpg' : return snow;
      case '../../images/tyler.jpg' : return tyler;
      case '../../images/leaf.jpg' : return leaf;
      default: return snow;
    }
  } 
  
  return (<img src={switchUrl(url)} className="rounded-circle" style={{ width: w }}
    alt="Avatar" />)
}

export default Image;