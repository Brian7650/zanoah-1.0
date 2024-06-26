// import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowRight, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashSidebar() {
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
    <Sidebar className="w-full md:56" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
          <Sidebar.Item active={tab === 'profile'} icon={HiUser}label={"User"} labelColor="dark">
            Profile
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowRight}className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
