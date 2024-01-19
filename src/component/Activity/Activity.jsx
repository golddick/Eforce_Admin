import React from 'react'
import './Activity.css'
import Chart from '../Chart/Chart'
import LineChart from '../Chart/ChartLine';

function Activity() {

  const chartData = {
    labels: ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Safety Performance Metrics',
        data: [12, 19, 3, 5, 2, 3,1, 0, 3, 5, 12, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        
        borderWidth: 1,
        
      },
      
    ],
    
  };

  return (
    <div className='Activity'>
      <h1 className='actHeader'>Insights</h1>
    <div className="widgetroll">
      <div className="widgetCard">
        <div className="cardTop">
          <div className="cardIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 15 33" fill="none" className='cIcon'>
          <path d="M7.21483 2.40429C7.85248 2.40429 8.46402 2.65759 8.91491 3.10849C9.3658 3.55938 9.61911 4.17092 9.61911 4.80857C9.61911 5.44623 9.3658 6.05777 8.91491 6.50866C8.46402 6.95955 7.85248 7.21286 7.21483 7.21286C6.57717 7.21286 5.96563 6.95955 5.51474 6.50866C5.06385 6.05777 4.81054 5.44623 4.81054 4.80857C4.81054 4.17092 5.06385 3.55938 5.51474 3.10849C5.96563 2.65759 6.57717 2.40429 7.21483 2.40429ZM7.21483 0C5.93951 0 4.71644 0.506616 3.81465 1.4084C2.91287 2.31018 2.40626 3.53326 2.40626 4.80857C2.40626 6.08389 2.91287 7.30697 3.81465 8.20875C4.71644 9.11053 5.93951 9.61715 7.21483 9.61715C8.49014 9.61715 9.71322 9.11053 10.615 8.20875C11.5168 7.30697 12.0234 6.08389 12.0234 4.80857C12.0234 3.53326 11.5168 2.31018 10.615 1.4084C9.71322 0.506616 8.49014 0 7.21483 0ZM10.1721 10.7952H4.25756C3.1289 10.7952 2.04648 11.2436 1.2484 12.0417C0.450326 12.8398 0.00197043 13.9222 0.00197043 15.0508V21.3981C-0.024303 22.0662 0.213021 22.7179 0.662776 23.2126C1.11253 23.7074 1.73869 24.0055 2.40626 24.0429V29.6449C2.40626 30.41 2.71023 31.1439 3.2513 31.685C3.79236 32.226 4.52621 32.53 5.2914 32.53H9.13826C9.52537 32.5302 9.90857 32.4525 10.265 32.3016C10.6215 32.1506 10.9439 31.9294 11.2131 31.6512C11.4823 31.3731 11.6928 31.0436 11.832 30.6823C11.9712 30.3211 12.0363 29.9356 12.0234 29.5487V24.0429C12.691 24.0055 13.3171 23.7074 13.7669 23.2126C14.2166 22.7179 14.454 22.0662 14.4277 21.3981V15.0508C14.4277 13.9222 13.9793 12.8398 13.1813 12.0417C12.3832 11.2436 11.3007 10.7952 10.1721 10.7952ZM2.40626 21.6386V15.0508C2.40302 14.8068 2.4487 14.5646 2.54059 14.3386C2.63248 14.1125 2.76873 13.9071 2.94129 13.7346C3.11384 13.562 3.31922 13.4258 3.54529 13.3339C3.77136 13.242 4.01355 13.1963 4.25756 13.1995H10.1721C10.4161 13.1963 10.6583 13.242 10.8844 13.3339C11.1104 13.4258 11.3158 13.562 11.4884 13.7346C11.6609 13.9071 11.7972 14.1125 11.8891 14.3386C11.981 14.5646 12.0266 14.8068 12.0234 15.0508V21.6386H9.61911V29.5968C9.61911 29.7243 9.56845 29.8466 9.47827 29.9368C9.38809 30.027 9.26579 30.0776 9.13826 30.0776H5.2914C5.16387 30.0776 5.04156 30.027 4.95138 29.9368C4.8612 29.8466 4.81054 29.7243 4.81054 29.5968V21.6386H2.40626Z" fill="white"/>
        </svg>
          </div>
          <div className="cardText">
            <span className='NOF'> No. of offenders</span>
            <span className='Number'>65</span>
          </div>
        </div>

        <div className="statInfo">
          <div className="stat">+20%</div>
          <span className='statText'> than last month</span>
        </div>
      </div>
      <div className="widgetCard">
        <div className="cardTop">
          <div className="cardIcon" style={{backgroundColor:'#047DD6'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 27 25" fill="none">
            <path d="M19.7667 8.01837e-08C20.7301 -0.000188854 21.6639 0.333513 22.409 0.944305C23.1541 1.5551 23.6645 2.40523 23.8533 3.35L24.1817 5H25.4167C25.7187 5.00001 26.0106 5.1094 26.2382 5.30795C26.4659 5.50649 26.6139 5.78074 26.655 6.08L26.6667 6.25C26.6667 6.55206 26.5573 6.8439 26.3587 7.07155C26.1602 7.2992 25.8859 7.44725 25.5867 7.48833L25.4167 7.5H24.6817L24.8683 8.43333C25.3873 8.58509 25.8431 8.90102 26.1673 9.33374C26.4916 9.76645 26.6668 10.2926 26.6667 10.8333V19.1667C26.6667 19.8297 26.4033 20.4656 25.9344 20.9344C25.4656 21.4033 24.8297 21.6667 24.1667 21.6667H23.3333V23.3333C23.3333 23.7754 23.1577 24.1993 22.8452 24.5118C22.5326 24.8244 22.1087 25 21.6667 25C21.2246 25 20.8007 24.8244 20.4882 24.5118C20.1756 24.1993 20 23.7754 20 23.3333V21.6667H6.66667V23.3333C6.66667 23.7754 6.49107 24.1993 6.17851 24.5118C5.86595 24.8244 5.44203 25 5 25C4.55797 25 4.13405 24.8244 3.82149 24.5118C3.50893 24.1993 3.33333 23.7754 3.33333 23.3333V21.6667H2.5C1.83696 21.6667 1.20107 21.4033 0.732233 20.9344C0.263392 20.4656 4.74115e-08 19.8297 4.74115e-08 19.1667V10.8333C-0.000105224 10.2926 0.175099 9.76645 0.499333 9.33374C0.823568 8.90102 1.27936 8.58509 1.79833 8.43333L1.98333 7.5H1.25C0.91848 7.5 0.600537 7.3683 0.366117 7.13388C0.131696 6.89946 4.74115e-08 6.58152 4.74115e-08 6.25C4.74115e-08 5.91848 0.131696 5.60054 0.366117 5.36612C0.600537 5.1317 0.91848 5 1.25 5H2.48333L2.81333 3.35C3.00217 2.40523 3.51258 1.5551 4.25769 0.944305C5.0028 0.333513 5.93654 -0.000188854 6.9 8.01837e-08H19.7667ZM24.1667 10H2.5C2.27899 10 2.06703 10.0878 1.91075 10.2441C1.75446 10.4004 1.66667 10.6123 1.66667 10.8333V19.1667C1.66667 19.3877 1.75446 19.5996 1.91075 19.7559C2.06703 19.9122 2.27899 20 2.5 20H24.1667C24.3877 20 24.5997 19.9122 24.7559 19.7559C24.9122 19.5996 25 19.3877 25 19.1667V10.8333C25 10.6123 24.9122 10.4004 24.7559 10.2441C24.5997 10.0878 24.3877 10 24.1667 10ZM6.66667 13.3333C7.1087 13.3333 7.53262 13.5089 7.84518 13.8215C8.15774 14.134 8.33334 14.558 8.33334 15C8.33334 15.442 8.15774 15.8659 7.84518 16.1785C7.53262 16.4911 7.1087 16.6667 6.66667 16.6667C6.22464 16.6667 5.80072 16.4911 5.48816 16.1785C5.1756 15.8659 5 15.442 5 15C5 14.558 5.1756 14.134 5.48816 13.8215C5.80072 13.5089 6.22464 13.3333 6.66667 13.3333ZM20 13.3333C20.442 13.3333 20.866 13.5089 21.1785 13.8215C21.4911 14.134 21.6667 14.558 21.6667 15C21.6667 15.442 21.4911 15.8659 21.1785 16.1785C20.866 16.4911 20.442 16.6667 20 16.6667C19.558 16.6667 19.1341 16.4911 18.8215 16.1785C18.5089 15.8659 18.3333 15.442 18.3333 15C18.3333 14.558 18.5089 14.134 18.8215 13.8215C19.1341 13.5089 19.558 13.3333 20 13.3333ZM19.7667 1.66667H6.9C6.32198 1.66663 5.76181 1.86689 5.31482 2.23336C4.86782 2.59982 4.56163 3.10986 4.44834 3.67667L3.515 8.33333H23.15L22.2183 3.67667C22.1051 3.11014 21.7992 2.60032 21.3525 2.23388C20.9058 1.86745 20.3461 1.66702 19.7683 1.66667H19.7667Z" fill="white"/>
          </svg>
          </div>
          <div className="cardText">
            <span className='NOF'>Vehicles Flagged</span>
            <span className='Number'>25</span>
          </div>
        </div>

        <div className="statInfo">
          <div className="stat">+20%</div>
          <span>than last month</span>
        </div>
      </div>
      <div className="widgetCard">
        <div className="cardTop">
          <div className="cardIcon" style={{backgroundColor:'#4DB81A'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 26 30" fill="none">
            <path d="M12.8401 18.31H12.9101C14.4101 18.35 15.6101 19.57 15.6101 21.07C15.6101 22.35 14.7401 23.42 13.5601 23.74V24.86C13.5601 25.26 13.2401 25.58 12.8401 25.58C12.4401 25.58 12.1201 25.26 12.1201 24.86V23.74C11.5325 23.582 11.0133 23.2349 10.6428 22.7522C10.2722 22.2696 10.071 21.6784 10.0701 21.07C10.0701 20.67 10.3901 20.35 10.7901 20.35C11.1901 20.35 11.5101 20.67 11.5101 21.07C11.5101 21.81 12.1001 22.4 12.8301 22.4C13.5601 22.4 14.1601 21.8 14.1601 21.07C14.1601 20.34 13.5601 19.74 12.8301 19.74H12.7601C12.0407 19.7205 11.3573 19.4212 10.855 18.9059C10.3527 18.3905 10.0711 17.6996 10.0701 16.98C10.0701 15.7 10.9401 14.63 12.1201 14.31V13.19C12.1201 12.79 12.4401 12.47 12.8401 12.47C13.2401 12.47 13.5601 12.79 13.5601 13.19V14.31C14.7401 14.63 15.6101 15.7 15.6101 16.98C15.6101 17.38 15.2901 17.7 14.8901 17.7C14.4901 17.7 14.1701 17.38 14.1701 16.98C14.1701 16.25 13.5701 15.65 12.8401 15.65C12.1101 15.65 11.5101 16.25 11.5101 16.98C11.5101 17.71 12.1101 18.31 12.8401 18.31Z" fill="white"/>
            <path d="M7.532 4.06503L10.318 7.32503L10.017 7.66103C4.283 8.94703 0 14.068 0 20.19C0 25.572 4.368 29.94 9.75 29.94H15.92C21.302 29.94 25.67 25.573 25.67 20.191C25.68 14.068 21.397 8.94703 15.663 7.66103C15.6863 7.44971 15.6481 7.23616 15.553 7.04603L17.923 4.33303L18.076 4.09703C18.2547 3.70736 18.3004 3.26979 18.2061 2.85161C18.1118 2.43343 17.8827 2.0578 17.5541 1.7825C17.2256 1.5072 16.8156 1.34746 16.3874 1.32787C15.9592 1.30827 15.5364 1.42989 15.184 1.67403L14.341 0.67403C14.1519 0.462411 13.9203 0.293013 13.6614 0.176878C13.4024 0.0607421 13.1219 0.000474531 12.8381 2.79097e-06C12.5543 -0.000468949 12.2736 0.0588657 12.0143 0.17414C11.7549 0.289414 11.5228 0.45804 11.333 0.66903L10.45 1.65503C10.0985 1.40581 9.67477 1.27934 9.24422 1.29518C8.81367 1.31101 8.40033 1.46828 8.06814 1.74264C7.73594 2.017 7.50341 2.39317 7.40649 2.81297C7.30958 3.23278 7.35369 3.67282 7.532 4.06503ZM11.331 5.45003L9.635 3.49003C10.029 3.67989 10.4748 3.7338 10.9028 3.64333C11.3307 3.55286 11.7165 3.32312 12 2.99003L12.8 1.95203L13.688 3.00403C13.9649 3.32601 14.3384 3.5499 14.7528 3.64235C15.1673 3.73479 15.6005 3.69084 15.988 3.51703L14.3 5.45003H11.331ZM2 20.19C2 14.202 6.852 9.35003 12.84 9.35003C18.828 9.35003 23.68 14.202 23.67 20.188V20.19C23.6692 22.2452 22.8524 24.216 21.3992 25.6692C19.946 27.1225 17.9752 27.9392 15.92 27.94H9.75C7.69482 27.9392 5.72404 27.1225 4.2708 25.6692C2.81757 24.216 2.0008 22.2452 2 20.19Z" fill="white"/>
          </svg>
          </div>
          <div className="cardText">
            <span className='NOF'> Month Income</span>
            <span className='Number'>N34,000,000</span>
          </div>
        </div>

        <div className="statInfo">
          <div className="stat">+20%</div>
          <span>than last month</span>
        </div>
      </div>
    </div>
    <Chart chartData={chartData}/>
    {/* <LineChart/> */}
    </div>
  )
}

export default Activity