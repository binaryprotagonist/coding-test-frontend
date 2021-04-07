import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../common/header'
import UserInfo from '../UserInfo/userInfo'

export default class Dashboard extends Component {


    render() {
        return (
            <div>
               
                <Header/>
                <UserInfo/>

                

            </div>
        )
    }
}
