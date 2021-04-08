import React, { Component } from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./index.css";

import axios from 'axios';

export default class userInfo extends Component {
    constructor() {
        super()
        this.state = {
            details: []

        }
    }
    componentDidMount() {
        this.getUserDetails()
    }
    getUserDetails(){
        // var userId=value
        axios.get(`http://localhost:5000/api/conditions`)
      .then(res => {
          console.log(res.data.data.conditions)
         const details = res.data.data.conditions;
         this.setState({ details });
      }).catch(err=>{
          console.log(err)
      })
        
        // axios.post(`http://localhost:500/api/conditions`, params,{
        //   "headers": {      
        //   "content-type": "application/json",      
        //   },
          
        //   })
        // .then(res => {
        //     console.log(res)
        // //   const user = res.data.data;    
        // //   this.setState({ user:user });
    
        // }).catch(err=>{
    
        // })
      }


    
    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                        {this.state.details.map(detail=><div  className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                        <div className="box_lamda">
                                 <img className="img_width" src={detail.image?detail.image:'/Dummy_Title_Card.jpeg'} />
                               <strong><h3>{detail.label?detail.label:''}</h3></strong>
                               <p className="para_semibold"><ReactReadMoreReadLess
                                charLimit={40}
                                readMoreText={"find out more "}
                                readLessText={"find out less"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                                >
                                    {detail.snippet?detail.snippet:''}      
                                </ReactReadMoreReadLess></p>
                             
                            </div>
                        </div>)}
                         {/* <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             
                         </div> */}
                         {/* <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div>
                         <div className="col-xl-3 col-lg-3 col-md-2 col-12 mt-4">
                             <div className="box_lamda">
                                 <img src="/medrect.png" />
                               <h3>Title 112</h3>
                               <p>Lorem ipsum is dolar sit amet and its is dummy content <a href="">Find out more</a></p>
                               </div>
                         </div> */}
                         
                        
                    </div>
               </div>
               
            
            </div>

           
        )
    }
}
