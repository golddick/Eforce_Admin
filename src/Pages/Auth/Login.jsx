import React from 'react'
import Logo from '../../assets/efl.svg'
import { CiLock, CiUnlock } from "react-icons/ci";
import'./Auth.css'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigateTo = useNavigate();

    const handleSubmitForm = () => {
        const route = `/management`;
        // Navigate to the constructed route
        navigateTo(route);
      };
      const handleReset = () => {
        const route = `/Forget-Password`;
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
                        </form>
                        <div className="formWarning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 27" fill="none">
                        <path d="M0.400141 21.4812L11.3316 2.21171C11.6047 1.73962 11.9947 1.34818 12.4628 1.0762C12.931 0.804215 13.461 0.661133 14.0004 0.661133C14.5398 0.661133 15.0698 0.804215 15.5379 1.0762C16.006 1.34818 16.396 1.73962 16.6692 2.21171L27.6006 21.4812C27.8634 21.9379 28.002 22.4572 28.002 22.986C28.002 23.5149 27.8634 24.0342 27.6006 24.4909C27.3309 24.9658 26.9416 25.3594 26.4726 25.6312C26.0036 25.903 25.4718 26.0432 24.9318 26.0376H3.06894C2.52933 26.0428 1.99805 25.9023 1.52953 25.6305C1.06101 25.3588 0.6721 24.9654 0.402641 24.4909C0.139427 24.0345 0.000482559 23.5152 4.3869e-05 22.9864C-0.000396729 22.4575 0.137686 21.9381 0.400141 21.4812ZM15.0004 10.8118C15.0004 10.5425 14.895 10.2844 14.7075 10.094C14.52 9.90364 14.2656 9.7967 14.0004 9.7967C13.7352 9.7967 13.4808 9.90364 13.2933 10.094C13.1057 10.2844 13.0004 10.5425 13.0004 10.8118V15.887C13.0004 16.1562 13.1057 16.4144 13.2933 16.6048C13.4808 16.7951 13.7352 16.9021 14.0004 16.9021C14.2656 16.9021 14.52 16.7951 14.7075 16.6048C14.895 16.4144 15.0004 16.1562 15.0004 15.887V10.8118ZM14.0004 21.9773C14.2971 21.9773 14.5871 21.888 14.8337 21.7207C15.0804 21.5534 15.2727 21.3156 15.3862 21.0374C15.4998 20.7592 15.5295 20.4531 15.4716 20.1577C15.4137 19.8624 15.2708 19.5911 15.0611 19.3781C14.8513 19.1652 14.584 19.0202 14.293 18.9614C14.002 18.9027 13.7004 18.9328 13.4263 19.0481C13.1522 19.1633 12.918 19.3585 12.7531 19.6089C12.5883 19.8592 12.5003 20.1536 12.5003 20.4548C12.5003 20.8586 12.6584 21.2458 12.9397 21.5314C13.221 21.8169 13.6025 21.9773 14.0004 21.9773Z" fill="white"/>
                        </svg>
                        <span className='warningText'>Please ensure to enter valid details.</span>
                        </div>
                        <button className='SubmitBTN' onClick={handleSubmitForm}>SUBMIT</button>

                        <div className="forgotP">
                            <div className="restP" onClick={handleReset}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 23" fill="none">
                            <path d="M15.3125 22.5C13.7708 22.5 12.3279 22.2137 10.9837 21.6413C9.63958 21.0688 8.4575 20.2821 7.4375 19.2812L9.21875 17.5C10.0104 18.2708 10.9271 18.8804 11.9688 19.3287C13.0104 19.7771 14.125 20.0008 15.3125 20C17.7292 20 19.7917 19.1458 21.5 17.4375C23.2083 15.7292 24.0625 13.6667 24.0625 11.25C24.0625 8.83333 23.2083 6.77083 21.5 5.0625C19.7917 3.35417 17.7292 2.5 15.3125 2.5C12.8958 2.5 10.8333 3.35417 9.125 5.0625C7.41667 6.77083 6.5625 8.83333 6.5625 11.25V11.4688L8.84375 9.1875L10.625 10.9375L5.3125 16.25L0 10.9375L1.78125 9.1875L4.0625 11.5V11.25C4.0625 9.6875 4.35958 8.22417 4.95375 6.86C5.54792 5.49583 6.35 4.30833 7.36 3.2975C8.37 2.28667 9.5575 1.48458 10.9225 0.89125C12.2875 0.297917 13.7508 0.000833333 15.3125 0C16.875 0 18.3388 0.297083 19.7038 0.89125C21.0688 1.48542 22.2563 2.28708 23.2663 3.29625C24.2763 4.30708 25.0783 5.49458 25.6725 6.85875C26.2667 8.22292 26.5633 9.68667 26.5625 11.25C26.5625 14.375 25.4688 17.0312 23.2812 19.2188C21.0938 21.4062 18.4375 22.5 15.3125 22.5ZM11.5625 16.25V10H12.8125V8.75C12.8125 8.0625 13.0575 7.47417 13.5475 6.985C14.0375 6.49583 14.6258 6.25083 15.3125 6.25C16 6.25 16.5888 6.495 17.0788 6.985C17.5688 7.475 17.8133 8.06333 17.8125 8.75V10H19.0625V16.25H11.5625ZM14.0625 10H16.5625V8.75C16.5625 8.39583 16.4425 8.09917 16.2025 7.86C15.9625 7.62083 15.6658 7.50083 15.3125 7.5C14.9583 7.5 14.6617 7.62 14.4225 7.86C14.1833 8.1 14.0633 8.39667 14.0625 8.75V10Z" fill="white"/>
                            </svg>
                            <span className='resetText'>Reset password</span>
                            </div>
                        </div>
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

export default Login