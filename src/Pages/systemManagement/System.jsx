import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import { BsThreeDotsVertical } from "react-icons/bs";
import './system.css'
import { useNavigate } from 'react-router-dom';

function System() {
  const navigateTo = useNavigate();

  const handleProceedClick = () => {
    navigateTo('/Officer-Profile');
    // window.location.href = '/Officer-Profile';
  };
  return (
    <div className='System'>
      <div className="leftNav">
      <ENav/>
       <HomeNav/>

        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <TableNav/>
       <div className="officers">
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>
        <div className="officer">
          <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt=""  className='officerImg'/>
          <span className='officerName'>Justice Mark Chukwuemeka</span>
          <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
          <BsThreeDotsVertical className='moreOption'/>
        </div>

       </div>
      </div>
    </div>
  )
}

export default System