import React, { Component } from 'react'
function TeamItem ({ team}) {
    return <p>{team.title}</p>;
}
export class TeamList extends Component {
    render() {
        return (
            <div>
                {this.props.teams.map(team => (
                    <div>
                        <div className="btn btn-info container-fluid">
                            <TeamItem team = {team} key={team.id.toString()} />
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            
        )
    }
}

export default TeamList;
