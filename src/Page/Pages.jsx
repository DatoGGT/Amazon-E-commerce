import Signin from "../components/SignIn/Signin";
import Newproductbox from "../components/Newproductbox/Newproductbox";
import Productss from "../components/ProductBox/Products";
import Slider from "../components/Slider/Slider";
import AboutProducts from "../components/AboutProductPages/AboutProducts";




export default function Pages ()  {
    return (
       <>
       <Slider/>
       <Productss/>
       <Newproductbox/>
       <Signin/>
       
       
       </>
    );
}