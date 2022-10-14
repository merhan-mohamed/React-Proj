import React, {Component} from "react";
import "./work.css";
import axios from "axios"
import {Sizing, Icon} from "./style"


class Work extends Component {
    state = {
        works : []
    }

    componentDidMount(){
        axios.get("js/data.json").then(res => {
            this.setState({
                works: res.data.works
            })
        })
    }
    render(){
       const {works} = this.state
       const worklist = works.map((item) => {
        return(
            <Sizing className="card text-center" key={item.id} first={item.id} >
                <div key={item.id} className="card-body" >
                    <Icon className={item.icon_name}></Icon>
                    <h5 className="card-title">{item.title}</h5>
                    <hr className="mb-5 mx-4 " />
                    <p className="card-text fs-6 fw-normal p-3 text-secondary">{item.body}</p>
                </div>
            </Sizing>
            
        )

       })  
       
       return(
        <div className="Worked container mt-3">
            {worklist}
        </div>
       )
    }

    }
   

export default Work