import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'

function Functionalinputs() {
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[phone,setphone]=useState();
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
    if(!phone.match(phoneRegex) && phone.length!=10){
       setphoneError(true);
    }
    else{
        setphoneError(false);
    }
    setphone(phone);
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
    if(!phone.match(phoneRegex) && phone.length!=10){
       setphoneError(true);
    }
    else{
        setphoneError(false);
    }


    if((!name.length<3) && (email.match(emailRegex) && ((phone.match(phoneRegex) && (phone.length=10)))))
    {
alert('form has been submited...');

    }


   }




  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor ="">
       Your Name:</label><br/>
       <input  type="text" name="name" onChange={handlename} value={name} >
       </input>
       <br/>
       {nameError?<span style={{color:'red'}}>Name length must be greater than 2 characters</span> :""}
       <br/>
       <label htmlFor ="">
       Your E-Mail ID:</label><br></br>
       <input  type="text" name="email" onChange={handlemail} value={email} >
       </input><br/><br/>
       {emailError?<span style={{color:'red'}}>Invalid Email</span>:""}
       <br/><br/>
       <label htmlFor ="">
       Your Contact Number:</label><br></br>

       <input type="text" name="phone" onChange={handlephone} value={phone}>
       </input><br/><br/>
       {phoneError?<span style={{color:'red'}}>Invalid phone Number</span>:""}
       <br/><br/>
       <label htmlFor ="">
       Please mark the web portal which host the issue(s) encountered by you:
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
   
<label htmlFor ="">
       Please share the link (URL) of the Page which you are reporting against:
       </label><br></br>
       <input type="url" name="url" id="url" placeholder="" pattern="https://.*" size="30" required></input><br/><br/>
       <label htmlFor ="">
       Please tell us the reason for your complaint/concern.Choose an option which most closely matches<br/> with your concern.If you are unsure which option to choose,please select the last option.Thanks
       </label><br></br><br/><br/>

       <label htmlFor ="">
       Please tell us the reason for your complaint/concern.Choose an option which most closely matches<br/> with your concern.If you are unsure which option to choose,please select the last option.Thanks
       </label><br></br><br></br>
       <input type="checkbox" name="reason" value="  belong to another person and to which the user does not have right   "/> <label> belong to another person and to which the user does not have right     </label> <br/><br/>

       <input type="checkbox" name="reason" value="  defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily<br/> privacy, insulting or harassing on the basis of gender, libellous,racially or ethnically objectionable,<br/> relating or encouraging money laundering orgambling, or otherwise inconsistent with or contrary to <br/>the laws in force      "/> <label> defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily<br/> privacy, insulting or harassing on the basis of gender, libellous,racially or ethnically objectionable,<br/> relating or encouraging money laundering orgambling, or otherwise inconsistent with or contrary to <br/>the laws in force   </label><br/><br/>

       <input type="checkbox" name="reason" value="is harmful to child"/> <label>is harmful to child</label><br/><br/>

       <input type="checkbox" name="reason" value=" infringes any patent, trademark, copyright or other proprietary rights "/> <label>infringes any patent, trademark, copyright or other proprietary rights</label><br/><br/>

       <input type="checkbox" name="reason" value="violates any law for the time being in force "/> <label>violates any law for the time being in force </label><br/><br/>

       <input type="checkbox" name="reason" value="deceives or misleads the addressee about the origin of the message or knowingly andintentionally <br/>communicates any information which is patently false or misleading innature but may reasonably be<br/> perceived as a fact"/> <label>  deceives or misleads the addressee about the origin of the message or knowingly andintentionally <br/>communicates any information which is patently false or misleading innature but may reasonably be<br/> perceived as a fact  </label><br/><br/>

       <input type="checkbox" name="reason" value=" impersonates another person   "/> <label>  impersonates another person    </label><br/><br/>

       <input type="checkbox" name="reason" value="  threatens the unity, integrity, defence, security or sovereignty of India, friendlyrelations with foreign<br/> States, or public order, or causes incitement to the commissionof any cognisable offence or prevents<br/> investigation of any offence or is insultingother nation  "/> <label>  threatens the unity, integrity, defence, security or sovereignty of India, friendlyrelations with foreign<br/> States, or public order, or causes incitement to the commissionof any cognisable offence or prevents<br/> investigation of any offence or is insultingother nation     </label><br/><br/>

       <input type="checkbox" name="reason" value=" contains software virus or any other computer code, file or program designed tointerrupt, destroy or<br/> limit the functionality of any computer resource  "/> <label> contains software virus or any other computer code, file or program designed tointerrupt, destroy or<br/> limit the functionality of any computer resource   </label><br/><br/>
       <input type="checkbox" name="reason" value="  is patently false and untrue, and is written or published in any form, with the intent tomislead or <br/>harass a person, entity or agency for financial gain or to cause any injuryto any person    "/> <label> is patently false and untrue, and is written or published in any form, with the intent tomislead or <br/>harass a person, entity or agency for financial gain or to cause any injuryto any person     </label><br/><br/>
       <input type="checkbox" name="reason" value="  Others (including Consumer Complaints)   "/> <label> Others (including Consumer Complaints)   </label><br/><br/>
       
       






      <textarea rows={2} cols={40} name="comment"></textarea><br/><br/>

      <label htmlFor ="">
      Please upload any supporting document(s) pertaining to the issue you are reporting:
        
       </label><br></br><br></br>
       <input type="file"  accept="image/jpeg,image/png,image/jpg,image/gif,application/pdf"size={2} ></input><br/><br/>

      <label htmlFor ="">
      (Please upload a GIF, PNG, JPG, PDF or JPEG file only and ensure that the file is currently not in use. [Maximum File Size Limit 2 MB])
        
       </label><br></br><br></br>

      <ReCAPTCHA sitekey=" "/>
     
       <input type='submit' value="submit"/>
        
            
        
      </form>
    </div>
  )
}

export default Functionalinputs
