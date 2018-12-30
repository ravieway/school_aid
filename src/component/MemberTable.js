import React, { Component } from 'react';
import MemberCard from "../component/MemberCard";


class MemberTable extends Component {
    renderUserCards = (data) => {
      return data.map(ele => {
        return(
          <div key={ele._id}>
            <MemberCard id={ele._id} userName={ele.userName} password={ele.password} email={ele.email}/>
          </div>
        )
      })
    }

    render() {
      return (
        <div>
            <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{width:30}}>Username</th>
                        <th style={{width:70}}>E-mail</th>
                        <th style={{width:50}}>Password</th>
                        <th style={{width:200}}></th>

                      </tr>
                    </thead>
                  </table>
                  {this.renderUserCards(this.props.users)}
                </div>
        </div>
      );
    }
  }
  
  export default MemberTable;