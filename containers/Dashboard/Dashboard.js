import { faCreditCard, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCamera, faHome, faImages, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, List, ListItem as div } from '@material-ui/core';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/action';
import DashboardWrapper from './DashboardWrapper';
import Link from 'next/link'

const menus = [
    { id: "home", to: "/", title: "Home", icon: faHome },
    { id: "users", to: "/users", title: "Users", icon: faUser },
    { id: "todos", to: "/todos", title: "Todos", icon: faTasks },
    { id: "albums", to: "/albums", title: "Albums", icon: faCamera },
    { id: "photos", to: "/photos", title: "Photos", icon: faImages },
    { id: "posts", to: "/posts", title: "Posts", icon: faNewspaper },
    { id: "cards", to: "/cards", title: "Cards", icon: faCreditCard }
]

const Dashboard = ({ children, menu }) => {

    const dispatch = useDispatch();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper >
            <div className={`sideBar ${show && "show" || ""}`}>
                <List>
                    <h1 className="mb-5">Dashboard</h1>
                    {menus.map((v, i) =>
                        <li>
                            <Slide>
                                <Link key={v.id} href={`${v.to}`} >
                                    <a className={`${menu === v.id ? "active" : ""}`}>
                                        <div >
                                            <FontAwesomeIcon icon={v.icon} className="mx-2" /> {v.title}
                                        </div>
                                    </a>
                                </Link>
                            </Slide>
                        </li>
                    )}
                </List>
            </div>
            <div className="rightBar">
                <header className="shadow">
                    <Button onClick={() => toggleMenu(dispatch)} variant="contained " disableElevation className="btn ">
                        <FontAwesomeIcon size="lg" icon={faBars} />
                    </Button>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard
