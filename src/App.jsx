import { IoClose } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [lang, setLang] = useState('af');
  const [outputText, setOutputText] = useState('');
  const [detectLang, setDetectLang] = useState('...');
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  const outputRef = useRef();

  const handleTranslate = async ()=>{

    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
      params: {
        'to[0]': lang,
        'api-version': '3.0',
        profanityAction: 'NoAction',
        textType: 'plain'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '6621facf16msh178dd59ea70ad77p14988cjsn55f9a37462d2',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: [
        {
          Text: inputText
        }
      ]
    };

    try {
      const response = await axios.request(options);
      const translated = response.data[0].translations[0].text;
      const detect = response.data[0].detectedLanguage.language;

      switch(detect){
        case 'af': setDetectLang('Afrikaans');
          break;
        case 'ar': setDetectLang('Arabic');
          break;
        case 'zh-Hans': setDetectLang('Chinese (Simplified)');
          break;
        case 'zh-Hant': setDetectLang('Chinese (Traditional)');
          break;
        case 'hr': setDetectLang('Croatian');
          break;
        case 'cs': setDetectLang('Czech');
          break;
        case 'da': setDetectLang('Danish');
          break;
        case 'nl': setDetectLang('Dutch');
          break;
        case 'en': setDetectLang('English');
          break;
        case 'et': setDetectLang('Estonian');
          break;
        case 'fi': setDetectLang('Finnish');
          break;
        case 'fr': setDetectLang('French');
          break;
        case 'ka': setDetectLang('Georgian');
          break;
        case 'de': setDetectLang('German');
          break;
        case 'el': setDetectLang('Greek');
          break;
        case 'he': setDetectLang('Hebrew');
          break;
        case 'hi': setDetectLang('Hindi');
          break;
        case 'hu': setDetectLang('Hungarian');
          break;
        case 'is': setDetectLang('Icelandic');
          break;
        case 'id': setDetectLang('Indonesian');
          break;
        case 'ga': setDetectLang('Irish');
          break;
        case 'it': setDetectLang('Italian');
          break;
        case 'ja': setDetectLang('Japanese');
          break;
        case 'ko': setDetectLang('Korean');
          break;
        case 'la': setDetectLang('Latin');
          break;
        case 'lv': setDetectLang('Latvian');
          break;
        case 'lt': setDetectLang('Lithuanian');
          break;
        case 'mk': setDetectLang('Macedonian');
          break;
        case 'ms': setDetectLang('Malay');
          break;
        case 'ne': setDetectLang('Nepali');
          break;
        case 'no': setDetectLang('Norwegian');
          break;
        case 'fa': setDetectLang('Persian');
          break;
        case 'pl': setDetectLang('Polish');
          break;
        case 'pt': setDetectLang('Portuguese');
          break;
        case 'ro': setDetectLang('Romanian');
          break;
        case 'ru': setDetectLang('Russian');
          break;
        case 'sr': setDetectLang('Serbian');
          break;
        case 'sd': setDetectLang('Sindhi');
          break;
        case 'sl': setDetectLang('Slovenian');
          break;
        case 'so': setDetectLang('Somali');
          break;
        case 'es': setDetectLang('Spanish');
          break;
        case 'sw': setDetectLang('Swahili');
          break;
        case 'sv': setDetectLang('Swedish');
          break;
        case 'th': setDetectLang('Thai');
          break;
        case 'tr': setDetectLang('Turkish');
          break;
        case 'uk': setDetectLang('Ukrainian');
          break;
        case 'vi': setDetectLang('Vietnamese');
          break;
        default : setDetectLang('Language not found');
      }
      setLoading(false);
      setOutputText(translated);
      setError(false);

    } catch (error) {
      setLoading(false);
      setError(error.message);
      setOutputText('')
      
    }
  }

  const handleCancel = ()=>{
    setInputText('');
    setOutputText('');
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(outputRef.current.innerText);
    setInputText('');
    setOutputText('');
  }

  useEffect(()=>{
    handleTranslate();
  },[lang])
  

  return (
    <section className="container">
      <div className="detectedLang">Detected Language : <span>{detectLang}</span></div>
      
      <div className="upperSection">
        <form className="form-input">
          <textarea 
            className="textarea"
            placeholder="Enter Text..."
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)}
            onKeyUp={()=> handleTranslate()}
          />
        </form>
        <div className="iconWrapper">
          {inputText.length >= 1 && <IoClose onClick={()=>handleCancel()} className='closeIcon icon'/>}
        </div>
      </div>

      <div className="lowerSection">
        <div className="selectWrp">
          <div className="transTo">Translate to -</div>
          <select 
            className="select"
            onChange={(e)=> setLang(e.target.value)}
          >
            <option value="af">Afrikaans</option>
            <option value="ar">Arabic</option>
            <option value="bg">Bulgarian</option>
            <option value="zh-Hans">Chinese (Simplified)</option>
            <option value="zh-Hant">Chinese (Traditional)</option>
            <option value="hr">Croatian</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="et">Estonian</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="ka">Georgian</option>
            <option value="de">German</option> 
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="is">Icelandic</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="la">Latin</option>
            <option value="lv">Latvian</option>
            <option value="lt">Lithuanian</option>
            <option value="mk">Macedonian</option>
            <option value="ms">Malay</option>
            <option value="ne">Nepali</option>
            <option value="no">Norwegian</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sr">Serbian</option>
            <option value="sd">Sindhi</option>
            <option value="sl">Slovenian</option>
            <option value="so">Somali</option>
            <option value="es">Spanish</option>
            <option value="sw">Swahili</option>
            <option value="sv">Swedish</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukrainian</option>
            <option value="vi">Vietnamese</option>
          </select>
        </div>
        <div className="outputP">
          {!loading &&<p ref={outputRef}>{outputText}</p>}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
        {inputText.length >= 1 && <button onClick={()=>handleCopy()} className="copyBtn">Copy</button>}
      </div>
    </section>
  )
}

export default App
