import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles/Sidebaritem.css'

const Sidebaritem = ({arrow, icon, label}) => {
    return (
        <div className='sidebaritem'>
            <div className="sidebarItem__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>

            <div className="sidebarItem__main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default Sidebaritem

