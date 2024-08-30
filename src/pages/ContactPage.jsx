import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import viber from '../assets/images/viber.png'
 import tele from '../assets/images/tele.png'
import fb from '../assets/images/fb.png'
import toast from 'react-hot-toast'
const ContactPage = () => {
    const contact=[
        {img:viber,text:'+96912345689',link:'viber.com'},
        {img:tele,text:'t.me/burma368',link:'telegram.org'},
        {img:fb,text:'www.facebook.com/123',link:'facebook.com'},
    ]
    const copyLink=(link)=>{
      navigator.clipboard.writeText(link)
      toast.success('Link Copied!')
    }
  return (
    <div className='py-4 px-2 px-sm-4 px-md-5'>
        <h5 className='fw-semibold mb-4 text-center'>Contact Information</h5>
       <div className="w-full px-3 row">
       {contact.map((item,index)=>{
            return <div key={index} className='mb-3  col-md-6 col-lg-4 px-0 px-sm-2  '  >
                <div className='rounded-4 py-2 contactCard'>
                <div  className="row" >
                    <div className="col-4 text-end">
                    <img src={item.img} className='contactImg mx-auto ' />
                    </div>
                <p className='col-8 mt-2'>{item.text}</p>
             </div>
             <div className="text-center">
             <button onClick={()=>copyLink(item.link)} className=' bg-gradient text-white rounded-5 px-4 pb-2'>Copy</button>
             </div>
             </div>
            </div>
        })}
       </div>
       <h4 className="fw-semibold mb-4 text-warning">ကျွန်ုပ်တို့ အကြောင်း
      </h4>
      <p>မ္ဗဂင်္လာပါ m9 Asia မှကြိုဆိုပါသည်။ကျွန်ုပ်တို့ m9 Asia ဝန်ဆောင်မှု့ကောင်းမွန်ခြင်း၏ အရေးပါမှုကိုသိရှိထား နို့ င်ပြီးလူကြီးမင်းတို့အတွက်အကောင်းဆုံးဂိမ်းအတွေ့အကြုံ က များပေးစွမ်းနိုင်ရန်အစဉ်ကြိုး ပမ်းနေပါသည်</p>
      <h4 className="fw-semibold my-4 text-warning">တန်ဖိုး
      </h4>
      <p>topslotဖောင်ဒေးရှင်းအားလူကြီးမင်းတို့အတွက်မြန်ဆွ န်ချောမွေ့သောOnlinegameများကစားနိုင်စေရန်တည် 6 ထွာင်ထားပါသည်။လူကြီးမင်းတို့၏အားပွေးမှု့ကိုအစဉ်တ န်ဖိုးထားပြီးဂိမ်းအတွေ့ အကြုံ များကိုကျွန်ုပ်တို့နှင့် ထပ်တူ ရရှိနိုင်လိမ့်မည်ဟု မျော်လင့်ပါသည်။ ကျွန်ုပ်တို့ထံတွင် လူ ကီးမင်းတို့ ကစားလိုသည် ပမာဏနှင့် ကိုက် ညှိနိုင်မည် ရှိုမိုးရှင်းများစွာ 3 ၏ဂိ စေရန်လူကြီးမင်း တိုထံမှအကြံပေးချက်များအားအစဉ်ကြို ဆိုနေပါသည်။</p>
      <h4 className="fw-semibold my-4 text-warning">သမာသမတ်ရှိသောကစားနည်းများ

      </h4>
      <p>အွန်လိုင်းတည်ထောင်ရာတွင်ထားရှိသောအ ည်းမျဉ်းများဖြစ်သည်အတွက် အွန်လိုင်းဂိမ်းလောကတွင် ကောင်းသတင်းဖြင့်ရပ်တည်နိုင်ခြင်းဖြစ်သည်။ ကျွန် တို့မှအထူးလုံခြုံသောငွေကြေးလွဲပြောင်းမှုစီမံချက်များ ထားရှိခြင်း၊ သမာသမတ်ရှိသောကစားနည်းများ ထားရှိခြ င်း၊ ဘာသာစကားပေါင်းစုံအသုံးပြု နိုင်ခြင်း လူကြီးမင်း တို့၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များ အား လုံခြုံ စွာထိန်းသိမ်းပေးထားခြင်း၊ စသည်များကိုအကောင် . . . ဆာ့ဝဲလ်များအသုံးပြု ကာလုပ်ဆောင် လေ့ရှိပါသည်</p>
      <h5 className="fw-semibold my-4 text-warning mb-5 pb-5">m9 Asia နှင့်ပတ်သက်ပြီးအကြံပေးချက် များမေးမြန်း လိုသည်များ ရှိပါ က ကျွန်ုပ် Customer service. ယ် မေးမြန်းနိုင်ငံ မေးမြန်းနိုင်ပါ သည်။လူကြီးမင်း တို့၏မည်သည်အခက်အခဲကိုမဆိုဖြေရှ င်းပေးနိုင်ရန် အစဉ်ကြို ဆိုနေပါသည် 
       </h5>
     </div>
  )
}

export default ContactPage