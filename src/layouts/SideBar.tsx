import React from 'react'
import { PATHS } from '../routes/route.path'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { MenuItem } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const SideBar = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(PATHS.LOGIN, { replace: true });
  };

  const isAdmin = user?.role === 'admin';

  const visibleNavItems = NavList.filter((item) => {
    if (item.adminOnly && !isAdmin) return false;
    return true;
  });

  return (
    <div className='bg-[#fefffe] w-[240px] border-r pt-20'>
      <p className='pl-10 text-text-fade mt-10 font-[500]'>Main Menu</p>

      <div className='mt-8'>
        {
          visibleNavItems.map((item, index) => (
            <Link to={`${item.link}`} key={index} className='no-underline text-black'>
              <NavigationItem
                title={item.title}
                active={router.pathname === item.link}
              />
            </Link>
          ))
        }

        <MenuItem sx={{ mt: 40 }} onClick={handleLogout}>
          <p className='pl-10 py-2 flex items-center gap-x-2'>
            Logout <ExitToAppOutlinedIcon />
          </p>
        </MenuItem>

      </div>
    </div>
  )
}

export default SideBar


const NavigationItem = ({ title, active }: { title: string, active: boolean }) => {
  return (
    <div className={`px-6 pl-10 py-3 mt-2 hover:bg-primary/10 cursor-pointer ${active ? ' border-l-4 border-primary' : ''}`}>
      <p className='font-medium text-[14px]'>{title}</p>
    </div>
  )
}


const NavList: { title: string; link: string; adminOnly?: boolean }[] = [
  {
    title: 'Dashboard',
    link: PATHS.DASHBOARD,
  },
  {
    title: 'Contribution Pension',
    link: PATHS.CONTRIBUTIONS
  },
  {
    title: 'Statements',
    link: PATHS.STATEMENTS,
  },
  // Example admin-only item. You can wire these routes when admin pages are implemented.
  {
    title: 'Admin Overview',
    link: PATHS.ADMIN.DASHBOARD,
    adminOnly: true,
  },
]
