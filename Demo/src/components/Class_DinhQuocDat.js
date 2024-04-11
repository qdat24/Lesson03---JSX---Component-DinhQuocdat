import React, { Component } from 'react';

class DQD_ClassComp extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng dữ liệu
        this.state = {
            firstName:"Đinh Quốc ",
            lastName:"Đạt",
            userName:"K22cnt3",
        } 
    }

    // arrow function
   Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn đã {this.props.age} tuổi.</h3>
            </div>
        );
    }

    ListMember = ()=>{
        return (
         <>
            <this.Member fullName="Nguyễn Văn A" age ="18" />
            <this.Member fullName="Nguyễn Văn B" age ="19" />
            <this.Member fullName="Nguyễn Văn C" age ="20" />
            <this.Member fullName="Nguyễn Văn D" age ="21" />
         </>
        )
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class Component Demo</h2>
                <hr/>
                <h3> Dữ liệu trong state </h3>
                <h4> Xin chào: {this.state.firstName} {this.state.lastName}</h4>
                <hr/>
                <h3> Dữ liệu từ props </h3>
                <p> Company: {this.props.company}</p>
                <p> Course: {this.props.course}</p>

                <hr/>
                <this.Member fullName="Đinh Quốc Đạt" age="20" />
                <hr/>
                {/* {this.ListMember} */}
                <this.ListMember />
            </div>
        );
    }
}

export default DQD_ClassComp;