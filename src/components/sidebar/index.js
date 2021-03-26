import React from 'react'
import NewFile from './NewFile'
import SidebarItem from './Sidebaritem'
import '../../styles/Sidebar.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';


const index = () => {
    return (
        <div className='sideBar'>
            <NewFile/>
            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon/>)} label={'Computers'}/>
                <SidebarItem  icon={(<PeopleAltIcon />)} label={'shared with me'}/>
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'recent'}/>
                <SidebarItem icon={(<StarBorderIcon />)} label={'starred'}/>
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'bin'}/>
                <hr/>   

                <SidebarItem icon={(<StorageIcon />)} label={'Storage'}/>

            </div>
                
        </div>
    )
}

export default index
