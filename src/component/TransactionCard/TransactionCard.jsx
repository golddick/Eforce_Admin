import React from 'react'
import './transCard.css'


function TransactionCard() {
  const TableHeader = [
    'Date','Name','Violation', 'Transaction Reference', 'Amount'
  ]
  const TableBody = [
  
      {
          id: 1,
          Date:'03 Nov 2023 9:21am',
          Name:'John Die',
          Violation:'Speeding Fine ',
          TransactionReference:'099067370740820847282 ',
          Amount:'5,000.00',
      },
      {
          id: 2,
          Date:'03 Nov 2023 9:21am',
          Name:'John Die',
          Violation:'Speeding Fine ',
          TransactionReference:'099067370740820847282 ',
          Amount:'5,000.00',
      },
  ]
  return (
    <div className='TransactionCard'>
      <div className="topTransInfo">
        <div className="trans_Details">
          <div className="topTD">
          <h3 className='TDHeader'>Transaction Details</h3>
          <span className='TDDate'>Nov 14th, 4:49 PM</span>
          </div>
          <div className="tdBanner">The recipient account has confirmed credit</div>
          <div className="tdOffice">
            <div className="tdInfo">
              <span className='tdInfoText'> Officer</span>
              <span className='tdInfoText'> Daniel Chris Godwin</span>
            </div>
            <div className="tdInfo">
              <span className='tdInfoText'> Description</span>
              <span className='tdInfoText'> Speeding Fine</span>
            </div>
            <div className="tdInfo">
              <span className='tdInfoText'> Payment Method</span>
              <span className='tdInfoText'> POS</span>
            </div>


            <div className="tdInfo">
              <span className='tdInfoText'> Status</span>
              <span className='tdSuccess'> Success</span>
            </div>
            <div className="tdInfo">
              <span className='tdInfoText'> Transaction Reference</span>
              <span className='tdInfoText'> 6755986676757884744642</span>
            </div>
            <div className="tdInfo">
              <span className='tdInfoText'> Michael Olise</span>
              <span className='tdInfoText'> N5,000.00</span>
            </div>
          </div>
         
        </div>
        <div className="recentTransaction">
            <div className="rtTop">
            <div className="topLeft">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
            <path d="M5.73054 7.26761C5.83117 7.36907 5.95089 7.44959 6.0828 7.50455C6.2147 7.5595 6.35618 7.58779 6.49908 7.58779C6.64197 7.58779 6.78345 7.5595 6.91536 7.50455C7.04726 7.44959 7.16698 7.36907 7.26761 7.26761L12.6798 1.8554C12.8836 1.65158 12.9982 1.37513 12.9982 1.08687C12.9982 0.798614 12.8836 0.522165 12.6798 0.318337C12.476 0.114509 12.1995 0 11.9113 0C11.623 0 11.3466 0.114509 11.1427 0.318337L6.49908 4.97283L1.8554 0.318337C1.65158 0.114509 1.37513 0 1.08687 0C0.798614 0 0.522165 0.114509 0.318337 0.318337C0.114509 0.522165 0 0.798614 0 1.08687C0 1.37513 0.114509 1.65158 0.318337 1.8554L5.73054 7.26761ZM7.26761 12.2252C7.16698 12.1237 7.04726 12.0432 6.91536 11.9883C6.78345 11.9333 6.64197 11.905 6.49908 11.905C6.35618 11.905 6.2147 11.9333 6.0828 11.9883C5.95089 12.0432 5.83117 12.1237 5.73054 12.2252L0.318337 17.6374C0.114509 17.8412 0 18.1177 0 18.4059C0 18.6942 0.114509 18.9706 0.318337 19.1745C0.522165 19.3783 0.798614 19.4928 1.08687 19.4928C1.37513 19.4928 1.65158 19.3783 1.8554 19.1745L6.49908 14.52L11.1427 19.1745C11.2434 19.2759 11.3631 19.3564 11.495 19.4114C11.6269 19.4664 11.7684 19.4946 11.9113 19.4946C12.0542 19.4946 12.1957 19.4664 12.3276 19.4114C12.4595 19.3564 12.5792 19.2759 12.6798 19.1745C12.7813 19.0738 12.8618 18.9541 12.9168 18.8222C12.9717 18.6903 13 18.5488 13 18.4059C13 18.263 12.9717 18.1216 12.9168 17.9896C12.8618 17.8577 12.7813 17.738 12.6798 17.6374L7.26761 12.2252Z" fill="black"/>
          </svg>
          <span className='rtText'>Recent Transactions </span>
            </div>
            <div className="topRight">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 40 40" fill="none">
            <g clip-path="url(#clip0_127_296)">
              <path d="M5.46875 37.0157V40.1407H34.8031V37.0157C34.8031 32.2219 27.4906 29.7875 20.1344 29.7969C12.8281 29.8032 5.46875 31.9375 5.46875 37.0157Z" fill="#2A56C6"/>
              <path d="M20.1629 29.772C17.4473 29.772 15.6191 30.1032 15.6191 30.1032L17.4941 40.0001H20.1629V29.772Z" fill="#004373"/>
              <path d="M20.0254 29.772C22.6504 29.772 24.4379 30.1001 24.4379 30.1001L22.7285 40.0001H20.0254V29.772Z" fill="#004373"/>
              <path d="M19.9996 28.1499H17.1621V31.1468C17.1621 32.503 18.3184 33.603 19.7434 33.603H20.259C21.684 33.603 22.8402 32.503 22.8402 31.1468V28.1499H19.9996Z" fill="#E49800"/>
              <path d="M20.9871 35.6531H19.2246L18.6715 33.3093H21.5215L20.9871 35.6531ZM21.6121 41.3687H18.5996L19.2246 35.6531H20.9871L21.6121 41.3687Z" fill="#FFCC00"/>
              <path d="M8.35664 17.1656C8.35664 17.1656 8.35352 14.5438 8.35352 10.975C8.35352 7.24375 11.091 2.07812 20.241 2.07812C26.6285 2.07812 29.016 4.60625 29.016 6.29063C29.016 6.29063 31.3879 6.71563 31.6223 9.75625C31.7848 11.8906 31.5754 17.0219 31.5754 17.0219C31.5754 17.0219 31.316 16.7938 31.0254 16.6594C30.8691 16.5875 30.7129 16.5563 30.7129 16.5563L30.2816 19.4844L27.1098 13.3344C27.1003 13.3166 27.0857 13.302 27.0679 13.2925C27.0501 13.2831 27.0298 13.2791 27.0098 13.2813L25.7223 13.4344C22.0121 13.8744 18.2637 13.8881 14.5504 13.475L12.8129 13.2813C12.7925 13.2798 12.7722 13.2843 12.7544 13.2943C12.7366 13.3043 12.7222 13.3193 12.7129 13.3375L9.78164 19.4656L9.33789 16.4844C9.33789 16.4844 9.03164 16.6063 8.75664 16.8188C8.49727 17.0188 8.35664 17.1656 8.35664 17.1656Z" fill="#6D4C41"/>
              <path d="M30.3402 16.3469C30.3402 16.3469 32.234 16.675 32.234 18.7125C32.234 20.5094 30.8527 21.2219 29.4715 21.2219V16.3469H30.3402ZM9.69648 16.3469C9.69648 16.3469 7.80273 16.675 7.80273 18.7125C7.80273 20.5094 9.18398 21.2219 10.5652 21.2219V16.3469H9.69648Z" fill="#E59600"/>
              <path d="M20.0191 2.99683C11.8629 2.99683 9.72852 9.3187 9.72852 18.2031C9.72852 27.4156 15.6504 29.7968 20.0191 29.7968C24.3254 29.7968 30.3098 27.4843 30.3098 18.2031C30.3129 9.32183 28.1785 2.99683 20.0191 2.99683Z" fill="#FCC21B"/>
              <path d="M22.9689 24.3374H17.0752C16.7377 24.3374 16.5908 24.5655 16.8158 24.9062C17.1283 25.3812 18.2908 26.2999 20.022 26.2999C21.7533 26.2999 22.9158 25.3843 23.2283 24.9062C23.4502 24.5655 23.3064 24.3374 22.9689 24.3374Z" fill="#4C3734"/>
              <path d="M22.9689 24.3374H17.0752C16.7377 24.3374 16.5908 24.5655 16.8158 24.9062C17.1283 25.3812 18.2908 26.2999 20.022 26.2999C21.7533 26.2999 22.9158 25.3843 23.2283 24.9062C23.4502 24.5655 23.3064 24.3374 22.9689 24.3374Z" fill="#513F35"/>
              <path d="M21.4433 21.8312C20.9401 21.9718 20.4214 22.0437 20.0183 22.0437C19.6151 22.0437 19.0964 21.9749 18.5933 21.8312C18.3776 21.7718 18.2933 21.9749 18.3714 22.1093C18.5308 22.3905 19.1714 22.953 20.0183 22.953C20.8651 22.953 21.5058 22.3874 21.6651 22.1093C21.7433 21.9749 21.6589 21.7718 21.4433 21.8312Z" fill="#E59600"/>
              <path d="M16.6652 18.7843C16.6652 19.6906 16.059 20.4281 15.3059 20.4281C14.5527 20.4281 13.9434 19.6906 13.9434 18.7843C13.9434 17.875 14.5559 17.1375 15.3059 17.1375C16.059 17.1375 16.6652 17.875 16.6652 18.7843ZM23.3715 18.7843C23.3715 19.6906 23.9809 20.4281 24.734 20.4281C25.484 20.4281 26.0965 19.6906 26.0965 18.7843C26.0965 17.875 25.484 17.1375 24.734 17.1375C23.9809 17.1375 23.3715 17.875 23.3715 18.7843Z" fill="#444444"/>
              <path d="M9.72755 18.7844L9.1838 15.4375C9.1838 15.4375 8.00567 2.53125 20.2994 2.53125C32.5932 2.53125 30.6775 15.9969 30.6775 15.9969L30.3025 18.7844L27.1088 13.375C27.1088 13.375 21.04 13.8625 13.1588 13.2719L9.72755 18.7844Z" fill="#6D4C41"/>
              <path d="M20.0004 12.4219C14.1598 12.4625 8.86914 13.5187 8.86914 13.5187C8.86914 13.5187 11.591 16.625 20.0004 16.6906C28.4098 16.625 31.1316 13.5187 31.1316 13.5187C31.1316 13.5187 25.841 12.4625 20.0004 12.4219Z" fill="#262626"/>
              <path d="M32.194 6.9938C31.4753 6.07505 30.9097 5.5188 29.9815 4.84692C27.0878 2.76567 23.0721 1.8313 20.1096 1.8313C20.0753 1.8313 20.0378 1.83442 20.0003 1.83442C19.9659 1.83442 19.9253 1.8313 19.8909 1.8313C16.9284 1.8313 12.9128 2.76567 10.019 4.84692C9.08778 5.5188 8.52527 6.07505 7.80652 6.9938C6.75027 8.3438 6.53152 10.4188 7.1909 12.1657C7.71902 13.5625 8.34402 14.5157 8.34402 14.5157C8.9284 13.3313 9.75652 12.6 10.8909 12.2844C12.0534 11.9625 16.2784 11.6094 20.0003 11.45C23.7221 11.6063 27.9472 11.9625 29.1097 12.2844C30.244 12.6 31.069 13.3313 31.6565 14.5157C31.6565 14.5157 32.2847 13.5625 32.8097 12.1657C33.469 10.4188 33.2534 8.3438 32.194 6.9938Z" fill="#2A56C6"/>
              <path d="M30.4811 10.225C30.4811 10.225 25.9248 7.49683 19.9998 7.46558C14.0748 7.49683 9.51855 10.225 9.51855 10.225L9.01855 13.5187C9.01855 13.5187 14.0654 12.4156 19.9967 12.4031C25.9279 12.4156 30.9748 13.5187 30.9748 13.5187L30.4811 10.225Z" fill="#3B78E7"/>
              <path d="M22.3716 5.17183C22.2873 5.17183 22.2123 5.21558 22.1685 5.28433C21.9904 5.5687 21.731 5.76245 21.2717 5.76245C20.8248 5.76245 20.4998 5.32808 20.3029 5.0562C20.2404 4.97183 20.1435 4.9187 20.0404 4.9187C19.9341 4.9187 19.8373 4.97183 19.7748 5.05933C19.5842 5.32808 19.2717 5.76245 18.8279 5.76245C18.3685 5.76245 18.1092 5.5687 17.931 5.28433C17.9097 5.24971 17.8798 5.22118 17.8442 5.20148C17.8086 5.18178 17.7686 5.17156 17.7279 5.17183C17.6498 5.17183 17.5779 5.20933 17.531 5.27183L17.431 5.40933C17.3123 5.57183 17.2935 5.79058 17.3842 5.97183C17.5185 6.2437 17.5904 6.5437 17.5904 6.84683V8.0312C17.5904 8.8937 18.9217 10.6593 20.0498 10.6593C21.1779 10.6593 22.5092 8.8937 22.5092 8.0312V6.8437C22.5092 6.54058 22.581 6.24058 22.7154 5.9687C22.806 5.78745 22.7873 5.57183 22.6685 5.4062L22.5685 5.2687C22.5449 5.239 22.515 5.21491 22.481 5.19816C22.4469 5.1814 22.4096 5.17241 22.3716 5.17183Z" fill="#F7CB4D"/>
              <path d="M14.1185 32.4718C11.1904 33.1311 9.63415 33.1311 6.70602 32.4718C6.28727 32.378 6.0279 31.9968 6.12477 31.6405C6.2154 31.303 6.26227 31.1343 6.35602 30.7999C6.4529 30.4436 6.82477 30.2405 7.1904 30.3218C9.73727 30.8936 11.0904 30.8936 13.6373 30.3218C14.0029 30.2405 14.3716 30.4468 14.4717 30.7999C14.5623 31.1374 14.6091 31.3061 14.7029 31.6405C14.7966 31.9936 14.5373 32.378 14.1185 32.4718ZM26.0279 32.4718C28.956 33.1311 30.5123 33.1311 33.4404 32.4718C33.8591 32.378 34.1185 31.9968 34.0217 31.6405C33.931 31.303 33.8841 31.1343 33.7904 30.7999C33.6935 30.4436 33.3216 30.2405 32.956 30.3218C30.4091 30.8936 29.056 30.8936 26.5092 30.3218C26.1435 30.2405 25.7748 30.4468 25.6748 30.7999C25.5842 31.1374 25.5373 31.3061 25.4435 31.6405C25.3529 31.9936 25.6091 32.378 26.0279 32.4718Z" fill="#004373"/>
              <path d="M22.8965 29.897C22.8965 30.3751 22.4871 31.2782 21.834 32.0282C21.1715 32.7907 20.0684 33.2626 20.0684 33.2626L24.2059 36.7251L24.4777 30.1032C24.4777 30.1063 23.5152 29.9563 22.8965 29.897Z" fill="#3B78E7"/>
              <path d="M17.2658 29.8938C17.2658 30.3719 17.6752 31.275 18.3283 32.025C18.9908 32.7875 20.0939 33.2594 20.0939 33.2594L15.8596 36.725L15.6846 30.0969C15.6846 30.0969 16.6314 29.9469 17.2658 29.8938Z" fill="#3B78E7"/>
            </g>
            <defs>
              <clipPath id="clip0_127_296">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span className='rtText'>By Daniel Godwin</span>
            </div>
            </div>

            <div className="rtList">
              <div className="recentT">
                <div className="rTleft">
                <span className='rtName'> Michael Olise</span>
                <span className='rtv'>Speeding Fine</span>
                </div>
                <div className="rTright">
                <span className='rtAmount'> N5,000.00</span>
                <span className='rtDate'>14 Nov, 2023 4:49pm </span>
                </div>
              </div>
              <div className="recentT">
                <div className="rTleft">
                <span className='rtName'> Michael Olise</span>
                <span className='rtv'>Speeding Fine</span>
                </div>
                <div className="rTright">
                <span className='rtAmount'> N5,000.00</span>
                <span className='rtDate'>14 Nov, 2023 4:49pm </span>
                </div>
              </div>
              <div className="recentT">
                <div className="rTleft">
                <span className='rtName'> Michael Olise</span>
                <span className='rtv'>Speeding Fine</span>
                </div>
                <div className="rTright">
                <span className='rtAmount'> N5,000.00</span>
                <span className='rtDate'>14 Nov, 2023 4:49pm </span>
                </div>
              </div>
              <div className="recentT">
                <div className="rTleft">
                <span className='rtName'> Michael Olise</span>
                <span className='rtv'>Speeding Fine</span>
                </div>
                <div className="rTright">
                <span className='rtAmount'> N5,000.00</span>
                <span className='rtDate'>14 Nov, 2023 4:49pm </span>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="bottomTransInfo">
     
        <div className="tiTop">
       <div className="leffttiTop">
       <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 20" fill="none">
        <path d="M5.73054 7.26761C5.83117 7.36907 5.95089 7.44959 6.0828 7.50455C6.2147 7.5595 6.35618 7.58779 6.49908 7.58779C6.64197 7.58779 6.78345 7.5595 6.91536 7.50455C7.04726 7.44959 7.16698 7.36907 7.26761 7.26761L12.6798 1.8554C12.8836 1.65158 12.9982 1.37513 12.9982 1.08687C12.9982 0.798614 12.8836 0.522165 12.6798 0.318337C12.476 0.114509 12.1995 0 11.9113 0C11.623 0 11.3466 0.114509 11.1427 0.318337L6.49908 4.97283L1.8554 0.318337C1.65158 0.114509 1.37513 0 1.08687 0C0.798614 0 0.522165 0.114509 0.318337 0.318337C0.114509 0.522165 0 0.798614 0 1.08687C0 1.37513 0.114509 1.65158 0.318337 1.8554L5.73054 7.26761ZM7.26761 12.2252C7.16698 12.1237 7.04726 12.0432 6.91536 11.9883C6.78345 11.9333 6.64197 11.905 6.49908 11.905C6.35618 11.905 6.2147 11.9333 6.0828 11.9883C5.95089 12.0432 5.83117 12.1237 5.73054 12.2252L0.318337 17.6374C0.114509 17.8412 0 18.1177 0 18.4059C0 18.6942 0.114509 18.9706 0.318337 19.1745C0.522165 19.3783 0.798614 19.4928 1.08687 19.4928C1.37513 19.4928 1.65158 19.3783 1.8554 19.1745L6.49908 14.52L11.1427 19.1745C11.2434 19.2759 11.3631 19.3564 11.495 19.4114C11.6269 19.4664 11.7684 19.4946 11.9113 19.4946C12.0542 19.4946 12.1957 19.4664 12.3276 19.4114C12.4595 19.3564 12.5792 19.2759 12.6798 19.1745C12.7813 19.0738 12.8618 18.9541 12.9168 18.8222C12.9717 18.6903 13 18.5488 13 18.4059C13 18.263 12.9717 18.1216 12.9168 17.9896C12.8618 17.8577 12.7813 17.738 12.6798 17.6374L7.26761 12.2252Z" fill="black"/>
      </svg>
      <span  className='rtText'> Transactions History</span>
       </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" fill="none">
    <g clip-path="url(#clip0_125_242)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0008 22.3566L29.4292 31.7849C29.7435 32.0885 30.1645 32.2565 30.6015 32.2527C31.0385 32.2489 31.4565 32.0736 31.7655 31.7646C32.0746 31.4556 32.2498 31.0376 32.2536 30.6006C32.2574 30.1636 32.0894 29.7426 31.7858 29.4283L22.3575 19.9999L31.7858 10.5716C32.0894 10.2573 32.2574 9.83625 32.2536 9.39925C32.2498 8.96226 32.0746 8.54424 31.7655 8.23523C31.4565 7.92621 31.0385 7.75093 30.6015 7.74713C30.1645 7.74334 29.7435 7.91133 29.4292 8.21492L20.0008 17.6433L10.5725 8.21492C10.2568 7.91883 9.8382 7.7572 9.4054 7.76423C8.97259 7.77126 8.5595 7.94639 8.25353 8.25258C7.94756 8.55877 7.77271 8.97198 7.76599 9.40479C7.75927 9.8376 7.9212 10.256 8.21751 10.5716L17.6442 19.9999L8.21584 29.4283C8.05666 29.582 7.92969 29.7659 7.84234 29.9693C7.75499 30.1726 7.70902 30.3913 7.70709 30.6126C7.70517 30.8339 7.74734 31.0534 7.83114 31.2582C7.91494 31.463 8.0387 31.6491 8.19519 31.8056C8.35167 31.9621 8.53776 32.0858 8.74259 32.1696C8.94742 32.2534 9.16688 32.2956 9.38818 32.2937C9.60948 32.2918 9.82818 32.2458 10.0315 32.1584C10.2349 32.0711 10.4188 31.9441 10.5725 31.7849L20.0008 22.3566Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_125_242">
        <rect width="40" height="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
        </div>
        <div  className='TransactionTable' >

      <table className='transTable TI'>
      <tr className='TableHead'>
        {TableHeader.map((header, index) => (
          <th key={index} className='HeadText'>{header}</th>
        ))}
      </tr>
      {TableBody.map((row) => (
        <tr key={row.id} className='TableBody'>
          <td className='BodyTextDate'>{row.Date}</td>
          <td className='BodyText'>{row.Name}</td>
          <td className='BodyTextViolation'>{row.Violation}</td>
          <td className='BodyText'>{row.TransactionReference}</td>
          <td className='BodyTextAmount'>{row.Amount}</td>
        </tr>
      ))}
    </table>
    </div>
      </div>
    </div>
  )
} 

export default TransactionCard