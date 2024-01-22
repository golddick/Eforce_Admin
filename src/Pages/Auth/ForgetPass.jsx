import React from 'react'
import Logo from '../../assets/efl.svg'
import { CiLock, CiUnlock } from "react-icons/ci";
import'./Auth.css'
import { useNavigate } from 'react-router-dom';


function ForgetPassword() {
    const navigateTo = useNavigate();
    
    const handleSubmit = () => {
        const route = `/`;
        // Navigate to the constructed route
        navigateTo(route);
      };

  return (
    <div className='AuthContainer'>
        <div className="AContainer">
            <div className="containerFormBox">
                <div className="imgBox">
                    <img src={Logo} alt="LogoImg"  className='LogoImg'/>
                </div>

                <div className="containerBody">
                    <div className="formBodyText">
                        <h4 className='mdHeader'>ENSURING THE PEOPLE’S</h4>
                        <h1 className='BodyHeader'>SAFETY</h1>
                        <p className='bodyP'>Your safety is our primary concern; We are committed
                            to keeping you protected on the road</p>
                    </div>
                    <div className="formBody">
                        <form action="" className='form'>
                            <div className="formFiled">
                                <label htmlFor="email" className='labelText'>e-mail:</label>
                            <input type="email" id='email' className='BodyFormInput' />
                            <div className='inputIcon'>@</div>
                            </div>
                            <div className="formFiled">
                                <label htmlFor="password" className='labelText'>password</label>
                            <input type="password" id='password'  className='BodyFormInput'/>
                            <div><CiUnlock className='inputIcon'/></div>
                            </div>
                            <div className="formFiled">
                                <label htmlFor="Cpassword" className='labelText'>Confirm password</label>
                            <input type="password" id='Cpassword'  className='BodyFormInput'/>
                            <div><CiUnlock className='inputIcon'/></div>
                            </div>
                        </form>
                        <div className="formWarning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 27" fill="none">
                        <path d="M0.400141 21.4812L11.3316 2.21171C11.6047 1.73962 11.9947 1.34818 12.4628 1.0762C12.931 0.804215 13.461 0.661133 14.0004 0.661133C14.5398 0.661133 15.0698 0.804215 15.5379 1.0762C16.006 1.34818 16.396 1.73962 16.6692 2.21171L27.6006 21.4812C27.8634 21.9379 28.002 22.4572 28.002 22.986C28.002 23.5149 27.8634 24.0342 27.6006 24.4909C27.3309 24.9658 26.9416 25.3594 26.4726 25.6312C26.0036 25.903 25.4718 26.0432 24.9318 26.0376H3.06894C2.52933 26.0428 1.99805 25.9023 1.52953 25.6305C1.06101 25.3588 0.6721 24.9654 0.402641 24.4909C0.139427 24.0345 0.000482559 23.5152 4.3869e-05 22.9864C-0.000396729 22.4575 0.137686 21.9381 0.400141 21.4812ZM15.0004 10.8118C15.0004 10.5425 14.895 10.2844 14.7075 10.094C14.52 9.90364 14.2656 9.7967 14.0004 9.7967C13.7352 9.7967 13.4808 9.90364 13.2933 10.094C13.1057 10.2844 13.0004 10.5425 13.0004 10.8118V15.887C13.0004 16.1562 13.1057 16.4144 13.2933 16.6048C13.4808 16.7951 13.7352 16.9021 14.0004 16.9021C14.2656 16.9021 14.52 16.7951 14.7075 16.6048C14.895 16.4144 15.0004 16.1562 15.0004 15.887V10.8118ZM14.0004 21.9773C14.2971 21.9773 14.5871 21.888 14.8337 21.7207C15.0804 21.5534 15.2727 21.3156 15.3862 21.0374C15.4998 20.7592 15.5295 20.4531 15.4716 20.1577C15.4137 19.8624 15.2708 19.5911 15.0611 19.3781C14.8513 19.1652 14.584 19.0202 14.293 18.9614C14.002 18.9027 13.7004 18.9328 13.4263 19.0481C13.1522 19.1633 12.918 19.3585 12.7531 19.6089C12.5883 19.8592 12.5003 20.1536 12.5003 20.4548C12.5003 20.8586 12.6584 21.2458 12.9397 21.5314C13.221 21.8169 13.6025 21.9773 14.0004 21.9773Z" fill="white"/>
                        </svg>
                        <span className='warningText'>Please ensure your password tallies</span>
                        </div>
                        <button className='SubmitBTN' onClick={handleSubmit}>SUBMIT</button>

                    </div>
                </div>
            </div>
            <div className="containerText">
               
                <span  className='rotateText'>YOUR SAFETY</span>
                <span className='rotateText'>OUR PRIORITY</span>
             
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword