import styled from 'styled-components';
import flag from '../Header/images/usa-flag.png';

const ParentDiv=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
& label {
    padding-left: 10px;
    font-size: 15px;
} & .underline {
    width: 200px;
    height: 1px;
    background-color: #80808062;
    margin-top: 9px;
} & .spainlang {
    padding-top: 10px;
} & .languagecontainter{
    display: flex;
    flex-direction: column;
    gap: 5px;
} & .changecurrency {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 8px;
} & .changeusd {
    display: flex;
    margin-top: 5px;
    font-size: 14px;
} & .amazonshopping {
    display: flex;
} & .langaugesflag {
    width: 24px;
    height: 20px;
}   & .languagediv{
    display: flex;
   gap:7px;
    align-items: center;
    padding-top:5px;
    height: 20px;
  }
  & .languagediv a {
    color:#007185; 
     text-decoration: none;
     font-size: 12px;
     padding-left:9px;
     
  } 
   & .change {
    margin-left: 20px;
    font-size:13px;
    color:#007185;
    text-decoration: none;
  } & .learnmore {
    color:#007185;
    font-size: 12px;
    margin-left: 9px;
    text-decoration: none;
  } & .amazonshopping {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-size: 15px;
  } & .countrychange {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:15px 20px 0 20px;
  } & .flagandspan{
    display: flex;
    align-items: center;
    gap: 10px;
  } & .changecountry {
    color:#007185;
    text-decoration: none;
  } & .learn {
    color: #007185 ;
  } & .englishradioinput {
    margin-top: 7px;
  }

`
const Changelanguage = () => {
    return (
<ParentDiv>
<form >
<div className='languagediv'>
          <span>Change language</span> 
          <a href="#" className='learn'>Learn More</a>
          </div>
<div className='englishradioinput'>
  <input type="radio" name="changelanguage" id="english" value="english" />
  <label for="english">English - EN</label>
</div>
<div className="underline"></div>
<div className='languagecontainter'>

<div className='spainlang'> 
  <input type="radio" name="changelanguage" id="spanish" value="spanish" />
  <label for="spanish">español - ES</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="arabic"  value="arabic"/>
  <label for="arabic">العربية - AR</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="DE" value="DE" />
  <label for="DE">Deutsch - DE</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="HE" value="HE" />
  <label for="HE">עברית - HE</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="korean" value="korean" />
  <label for="korean">한국어 - KO</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="portuguese"  value="portuguese" />
  <label for="portuguese">português - PT</label>
</div>
<div>
  <input type="radio" name="changelanguage" id="ZH"  value= "ZH"/>
  <label for="changetoZH">中文 (简体) - ZH</label>
</div>
<div>
    <input type="radio" name="changelanguage" id="chinesse" value="chinesse" />
    <label for="chinesse">中文 (繁體) - ZH</label>
</div>
</div>
<div className="underline"></div>


<div className='changecurrency'>
<p>Change Currency</p>
<a href="" className='learnmore'>Learn More</a>
</div>
<div className='changeusd'>
    <p>$ - USD - US Dollar</p>
    <a href="" className='change'>Change</a>
</div>

<div className='underline'></div>
<div className='amazonshopping'>
    <div className='flagandspan'>
    <img src={flag} alt=""  className='langaugesflag'/> 
    <span>You Are Shopping on</span>

    </div>
    <span className='amazoncom'>Amazon.com</span>
    
</div>
<div className='countrychange'>
<a href="" className='changecountry'>Change Country/region</a>
</div>
</form>
</ParentDiv>
    )
}


export default Changelanguage



