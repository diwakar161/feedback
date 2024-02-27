import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'

function Functionalinputs() {
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[phone,setphone]=useState();
    const[option,setoption]=useState([]);
    const[nameError,setnameError]=useState(false);
    const[emailError,setemailError]=useState(false);
    const[phoneError,setphoneError]=useState(false);
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex=/^\d{10}$/
    const handlename=(e)=>{
      let name=e.target.value;
      if(name.length<3){
        setnameError(true);
      }
      else{
        setnameError(false);
      }
      setname(name);
    }
   const handlemail=(e)=>{
    let email=e.target.value;
    if(!email.match(emailRegex)){
        setemailError(true);
    }
    else{
        setemailError(false);
    }
    setemail(email);
   }

   const handlephone=(e)=>{
    let phone=e.target.value;
    if(!phone.match(phoneRegex)) {
       setphoneError(true);
    }
    else{
        setphoneError(false);
    }
    setphone(phone);
   }

   const handlechange=(e)=>{
    let value=e.target.value;
    let checked=e.target.checked;
    if(checked){
     setoption([
      ...option,value
     ])
    }
    else{
      setoption(option.filter((e)=>(e!==value)));
    }
   }

   const handlesubmit=(e)=>{
    e.preventDefault();
    let name=e.target[0].value;
      if(name.length<3){
        setnameError(true);
      }
      else{
        setnameError(false);
      }

      let email=e.target[1].value;
    if(!email.match(emailRegex)){
        setemailError(true);
    }
    else{
        setemailError(false);
    }
    let phone=e.target[2].value;
    if(!phone.match(phoneRegex)){
       setphoneError(true);
    }
    else{
        setphoneError(false);
    }
  
    
      let value=e.target[3].value;
      let checked=e.target.checked;
      if(checked){
       setoption([
        ...option,value
       ])
      }
      else{
        setoption(option.filter((e)=>(e!==value)));
      }
    




    if((!name.length<3) && (email.match(emailRegex) && ((phone.match(phoneRegex)))))
    {
alert('form has been submited...');

    }


   }




  return (
    
    <div className='inputfeed'>
      <form onSubmit={handlesubmit}>
        <label className='nameput' htmlFor ="">
       < sup className='star'>*</sup>Your Name:</label><br/>
       <input  type="text" name="name" onChange={handlename} value={name} >
       </input>
       <br/>
       {nameError?<span style={{color:'red'}}>Name length must be greater than 2 characters</span> :""}
       <br/>
       <label className='emailfeed' htmlFor ="">
      <sup className='star'> *</sup> Your E-Mail ID:</label><br></br>
       <input  type="text" name="email" onChange={handlemail} value={email} >
       </input><br/>
       {emailError?<span style={{color:'red'}}>Invalid Email</span>:""}
       <br/>
       <label className='contactfeed' htmlFor ="">
        <sup className='star'>*</sup>Your Contact Number:</label><br></br>

       <input type="number" name="phone" onChange={handlephone} value={phone}>
       </input><br/>
       {phoneError?<span style={{color:'red'}}>Invalid phone Number</span>:""}
       <br/>
       <label className='options' htmlFor ="">
       <sup className='star1'>*</sup>Please mark the web portal which host the issue(s) encountered by you:
       </label><br></br>

       <select required >
         <option >Select</option>
         <option>naukri.com</option>
         <option>99acres.com</option>
         <option>Jeevansathi.com</option>
         <option>Naukrigulf.com</option>
         <option>iimjobs.com.com</option>
         <option>Jobhai.com</option>
         <option>Shiksha.com</option>
         <option>Infoedge.in</option>
         <option>Ambitionbox.com</option>
         <option>Hirist.com</option>
         <option>Updazz.com</option>
         <option>Allthingstalent.org</option>
</select><br/><br/>
   
<label className='urlput' htmlFor ="">
      <sup className='star1'>*</sup> Please share the link (URL) of the Page which you are reporting against:
       </label><br></br>
       <input type="url" name="url" id="url" placeholder="" pattern="https://.*" size="30" required></input><br/><br/>

       <label className='concern' htmlFor ="">
       <sup className='star1'>*</sup>Please tell us the reason for your complaint/concern.Choose an option which most closely matches<br/> with your concern.If you are unsure which option to choose,please select the last option.Thanks
       </label><br></br><br></br>
       <input type="checkbox" name="reason" value="  belong to another person and to which the user does not have right   "   onChange={handlechange}/> <label className='opt'> belong to another person and to which the user does not have right     </label> <br/>

       <input type="checkbox" name="reason" value="  defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily<br/> privacy, insulting or harassing on the basis of gender, libellous,racially or ethnically objectionable,<br/> relating or encouraging money laundering orgambling, or otherwise inconsistent with or contrary to <br/>the laws in force " onChange={handlechange}/> <label className='opt'> defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily<br/> privacy, insulting or harassing on the basis of gender, libellous,racially or ethnically objectionable,<br/> relating or encouraging money laundering orgambling, or otherwise inconsistent with or contrary to <br/>the laws in force   </label><br/>

       <input type="checkbox" name="reason" value="is harmful to child" onChange={handlechange}   /> <label className='opt'>is harmful to child</label><br/>

       <input type="checkbox" name="reason" value=" infringes any patent, trademark, copyright or other proprietary rights "  onChange={handlechange}      /> <label className='opt'>infringes any patent, trademark, copyright or other proprietary rights</label><br/>

       <input type="checkbox" name="reason" value="violates any law for the time being in force " onChange={handlechange} /> <label className='opt'>violates any law for the time being in force </label><br/>

       <input type="checkbox" name="reason" value="deceives or misleads the addressee about the origin of the message or knowingly andintentionally <br/>communicates any information which is patently false or misleading innature but may reasonably be<br/> perceived as a fact" onChange={handlechange}   /> <label className='opt'>  deceives or misleads the addressee about the origin of the message or knowingly andintentionally <br/>communicates any information which is patently false or misleading innature but may reasonably be<br/> perceived as a fact  </label><br/>

       <input type="checkbox" name="reason" value=" impersonates another person " onChange={handlechange}   /> <label className='opt'>  impersonates another person    </label><br/>

       <input type="checkbox" name="reason" value="  threatens the unity, integrity, defence, security or sovereignty of India, friendlyrelations with foreign<br/> States, or public order, or causes incitement to the commissionof any cognisable offence or prevents<br/> investigation of any offence or is insultingother nation  "onChange={handlechange}    /> <label className='opt'>  threatens the unity, integrity, defence, security or sovereignty of India, friendlyrelations with foreign<br/> States, or public order, or causes incitement to the commissionof any cognisable offence or prevents<br/> investigation of any offence or is insultingother nation     </label><br/>

       <input type="checkbox" name="reason" value=" contains software virus or any other computer code, file or program designed tointerrupt, destroy or<br/> limit the functionality of any computer resource  " onChange={handlechange} /> <label className='opt'> contains software virus or any other computer code, file or program designed tointerrupt, destroy or<br/> limit the functionality of any computer resource   </label><br/>
       <input type="checkbox" name="reason" value="  is patently false and untrue, and is written or published in any form, with the intent tomislead or <br/>harass a person, entity or agency for financial gain or to cause any injuryto any person " onChange={handlechange}   /> <label className='opt'> is patently false and untrue, and is written or published in any form, with the intent tomislead or <br/>harass a person, entity or agency for financial gain or to cause any injuryto any person     </label><br/>
       <input type="checkbox" name="reason" value="  Others (including Consumer Complaints)  "  onChange={handlechange}  /> <label className='opt'> Others (including Consumer Complaints)   </label><br/><br/>
       
       



       <label className='area'> <sup className='star'>*</sup>Please describe your complaint/concern in detail: </label><br/>


      <textarea rows={5} cols={40} name="comment"></textarea><br/><br/>

      <label htmlFor ="">
      Please upload any supporting document(s) pertaining to the issue you are reporting:
        
       </label><br></br>
       <input type="file"  accept="image/jpeg,image/png,image/jpg,image/gif,application/pdf"size={2} ></input><br/><br/>

      <label className='upload' htmlFor ="">
      (Please upload a GIF, PNG, JPG, PDF or JPEG file only and ensure that the file is currently not in use. [Maximum File Size)
        
       </label><br/>

       <label className='upload' htmlFor ="">
      Limit 2 MB
        
       </label><br/><br/>


      <ReCAPTCHA sitekey=" "/><br/>

       <button className='scrollup' onClick="topFunction()" id="mybtn" title="Go to top"> ^ </button><br/><br/>
     
       <input className='btn' type='submit' value="Submit"/>
        
            
        
      </form>
    </div>
    
  )
}

export default Functionalinputs
