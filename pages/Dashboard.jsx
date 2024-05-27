// import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');// ?tab=profile
    if (tabFromUrl) {// if tabFromUrl is not null
      setTab(tabFromUrl);// set tab to tabFromUrl
    }
  }, [location.search]);// run this effect when location.search changes
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-56">
          {/* Sidebar */}
          <DashSidebar /> 
        </div>
        {tab === 'profile' && <DashProfile />}
    </div>
  );
}
