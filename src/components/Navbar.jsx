import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BsArrowRepeat } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import mm from '../assets/images/mm.png';
import en from '../assets/images/en.png';
import BASE_URL from '../hooks/baseURL';

const Navbar = () => {
  const langs = [
    { img: mm, name: 'MM', value: 'mm' },
    { img: en, name: 'EN', value: 'en' },
  ];
  const [selectedLang, setSelectedLang] = useState({
    img: mm,
    name: 'MM',
    value: 'mm',
  });

  const [playerData, setPlayerData] = useState({
    player_id: '',
    name: '',
    balance: 0,
  });

  useEffect(() => {
    // Fetch user data
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/user`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you are storing the token in localStorage
          },
        });

        const data = await response.json();
        if (data && data.data) {
          setPlayerData({
            player_id: data.data.player_id,
            name: data.data.name,
            balance: parseFloat(data.data.balance).toFixed(2), // Format the balance to 2 decimals
          });
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, []);

  return (
    <>
      <div className='d-flex align-items-center justify-content-between'>
        <Link to={'/'}>
          <img src={logo} className='logo' />
        </Link>
        <div className='d-flex align-items-center gap-2'>
          <Link
            to={'/profile'}
            className='d-none walletBg cursor-pointer d-lg-flex align-items-center justify-content-between gap-3 text-white px-2 px-sm-3 py-1 rounded-4'
          >
            <div className='d-flex align-items-center gap-2'>
              <FaRegUserCircle className='navUserIcon' size={26} />
              <div>
                <p className='fw-semibold navUserInfo'>
                  {playerData.name || 'Player'}{' '}
                </p>
                <small className='navUserInfo text-nowrap'>
                  {playerData.player_id}{' '}
                  <MdOutlineContentCopy className='navUserIcon' />
                </small>
              </div>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <h5 className='fw-semibold navUserInfo text-nowrap'>
                K {playerData.balance}
              </h5>
              <div className='pb-1 px-1 rounded-5 border'>
                <BsArrowRepeat className='navUserIcon' />
              </div>
            </div>
          </Link>
          <Dropdown>
            <Dropdown.Toggle
              style={{ background: '#054461' }}
              className='text-white'
              variant='none'
              id='dropdown-basic'
            >
              <img src={selectedLang.img} className='flag' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {langs.map((lang) => {
                return (
                  <Dropdown.Item
                    key={lang.value}
                    onClick={() => setSelectedLang(lang)}
                  >
                    <img src={lang.img} alt={lang.name} className='flag' />
                    <span className='ms-2 fw-semibold'>{lang.name}</span>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='w-max mx-auto'>
        <Link
          to={'/profile'}
          className='walletBg cursor-pointer d-flex d-lg-none align-items-center justify-content-between gap-3 text-white px-2 px-sm-3 py-1 rounded-4'
        >
          <div className='d-flex align-items-center gap-2'>
            <FaRegUserCircle className='navUserIcon' size={26} />
            <div>
              <p className='fw-semibold navUserInfo'>
                {playerData.name || 'Player'}{' '}
              </p>
              <small className='navUserInfo text-nowrap'>
                {playerData.player_id}{' '}
                <MdOutlineContentCopy className='navUserIcon' />
              </small>
            </div>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <h5 className='fw-semibold navUserInfo text-nowrap'>
              K {playerData.balance}
            </h5>
            <div className='pb-1 px-1 rounded-5 border'>
              <BsArrowRepeat className='navUserIcon' />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
