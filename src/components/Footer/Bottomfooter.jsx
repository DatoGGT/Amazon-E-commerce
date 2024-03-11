import styled from 'styled-components'




const CONTAINERDIV = styled.div`
display:flex;
background-color:#131A22;
width: 100%;
height: 500px;
justify-content: space-around;
gap: 35px;
 .Column {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 20px;
    & h3 {
        font-size: 15px;
        font-family: sans-serif;
        font-weight: bolder;
    }
    & ul li {
        list-style: none;
        color: grey;
    }
    & ul:hover {
        text-decoration: underline grey;
    } 
}


`
const Buttom=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:10px;
height: 80px;
background-color:#131A22;
.F-child {
    display: flex;
    gap: 32px;
    & a {
        font-size: 15px;
    }
}.lastspan{
    color:white;
    font-size: 14px;
}

`
const Bottomfooter = () => {
    return (
        <>
        <CONTAINERDIV>
<div className='Column'>
<a href="#"><ul><h3>Amazon Music</h3><li>Stream millions</li><li>of songs</li></ul></a>
<a href="#"><ul><h3>Amazon Ads</h3><li>Reach customers</li><li>wherever they</li><li>their time</li></ul></a>
<a href="#">  <ul><h3>6pm</h3><li>Score deals</li><li>on fashion <li>brands</li></li></ul></a>
<a href="#"> <ul><h3>AbeBooks</h3><li>Books, art</li><li>& collectibles</li></ul></a>
</div>

<div className='Column'>
 <a href="#">  <ul><h3>ACX</h3><li>Audiobook Publishing</li><li>Made Easy</li></ul></a>
 <a href="#">  <ul><h3>Sell on Amazon</h3><li>Start a Selling </li> <li>Account</li></ul></a>
 <a href="#">  <ul><h3>Amazon</h3> <li>Business </li> <li>Everything</li> <li>For</li>  <li>Your Business</li></ul></a>
 <a href="#"><ul><h3>AmazonGlobal</h3><li>Ship Orders</li><li>Internationally</li></ul></a>
</div>

<div className='Column'>
 <a href="#">  <ul><h3>Home Services</h3><li>Experienced Pros</li><li>Happiness Guarantee</li></ul></a>
 <a href="#">  <ul><h3>Amazon Web Services</h3> <li>Scalable Cloud</li>  <li>Computing Services</li></ul></a>
 <a href="#">  <ul><h3>Audible</h3> <li>Listen to Books </li> <li>&  Original</li> <li>Audio Performances</li></ul></a>
 <a href="#"><ul><h3>Box Office Mojo</h3><li>Find Movie</li><li>Box Office <br /> Data</li></ul></a>
</div>
<div className='Column'>
 <a href="#">  <ul><h3>Goodreads</h3><li>Book reviews</li><li>& recommendations</li></ul></a>
 <a href="#">  <ul> <h3>IMDB</h3><li>Movies, TV</li>  <li>& Celebrities</li></ul></a>
 <a href="#">  <ul><h3>IMDbPro</h3> <li>Get Info Entertainment </li> <li>Professionals Need</li></ul></a>
 <a href="#"><ul><h3>Kindle Direct Publishing</h3><li>Indie Digital & <br /> Print Publishing</li><li>Made Easy</li></ul></a>
</div>
<div className='Column'>
 <a href="#">  <ul><h3>Prime Video Direct</h3><li>Video Distribution</li><li> Made Easy</li></ul></a>
 <a href="#">  <ul> <h3>Shopbop</h3><li>Designer</li>  <li>Fashion Brands</li></ul></a>
 <a href="#">  <ul><h3>Woot!</h3> <li>Deals and</li> <li>Shenanigans</li></ul></a>
 <a href="#"><ul><h3>Zappos</h3><li>Shoes &</li><li>Clothing</li></ul></a>
</div>
<div className='Column'>
 <a href="#">  <ul><h3>Ring</h3><li>Smart Home</li><li>Security Systems</li></ul></a>
 <a href="#">  <ul> <h3>eero WiFi</h3><li>Stream 4K Video</li>  <li>in Every Room</li></ul></a>
 <a href="#">  <ul><h3>Blink</h3> <li>Smart Security</li> <li>for Every Home	</li></ul></a>
 <a href="#"><ul><h3>Neighbors App</h3><li>Real-Time Crime</li><li>& Safety Alerts</li></ul></a>
</div>
</CONTAINERDIV>

<Buttom>
    <div className='F-child'>
<a href="#">Conditions of Use </a>
<a href="#">Privacy Notice   </a>
<a href="#"> Your Ads Privacy Choices</a>

    </div>
<div>
    <span className='lastspan'>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
</div>
</Buttom>
    
</>
    )
}

export default Bottomfooter






















