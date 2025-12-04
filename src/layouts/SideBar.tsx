import React from 'react'
import { PATHS } from '../routes/route.path'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
    const router = useLocation();
  return (
    <div className='bg-[#fefffe] w-[240px] border-r pt-20'>
      <p className='pl-10 text-text-fade mt-10 font-[500]'>Main Menu</p>

      <div className='mt-8'>
        {
            NavList.map((item, index) => (
                <Link to={`${item.link}`} key={index}>
                <NavigationItem key={index} title={item.title} active={router.pathname === item.link}/>
                </Link>
            ))
        }

      </div>
    </div>
  )
}

export default SideBar



const NavigationItem = ({title, active}: {title: string, active:boolean}) => {
  return (
    <div className={`px-6 pl-10 py-3 mt-2 hover:bg-primary/10 cursor-pointer ${active ? ' border-l-4 border-primary':''}`}>
      <p className='font-medium text-[14px]'>{title}</p>
    </div>
  )
}


const NavList = [
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
    }
]
