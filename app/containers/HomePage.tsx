import React from 'react';
import Home from '../components/Home';
import TitleBar from '../components/TittleBar';
import SideBar from '../components/SideBar';

export default function HomePage() {
  return (
    <div>
      <SideBar />
      <TitleBar />
      <Home />
    </div>
  );
}
