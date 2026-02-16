import './App.css'

type StudentListProps = {
    students : string[];
}
function StudentList({ students }: StudentListProps) {
    return (
        <>
            <p><span>Activities:</span></p>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </>
    )
}

export default StudentList