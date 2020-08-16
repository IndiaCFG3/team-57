import React, { Component } from 'react'
function StudentItem ({ student}) {
    return (
        <p>
            <input type="checkbox"/> {' '}
            {student.title}
        </p>
    );
}
export class StudentList extends Component {
    render() {
        return (
            <div>
                {this.props.students.map(student => (
                    <div>
                        <div className="btn container-fluid">
                            <StudentItem student = {student} key={student.id.toString()} />
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            
        )
    }
}

export default StudentList;
