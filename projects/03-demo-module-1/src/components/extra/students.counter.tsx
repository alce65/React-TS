import {
    useEffect,
    useState,
    type ChangeEventHandler,
    type FormEventHandler,
} from 'react';

export const StudentCounter: React.FC = () => {
    const [students, setStudents] = useState(0);
    const [inputStudents, setInputStudents] = useState(students);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setInputStudents(event.target.valueAsNumber);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setStudents(inputStudents);
    };

    useEffect(() => {
        setInputStudents(students);
    }, [students]);

    return (
        <div>
            <h2>Student Counter</h2>
            <p>Number of students: <b>{students}</b></p>

            <div>
                <button onClick={() => setStudents(students + 1)}>➕</button>
                <button onClick={() => setStudents(students - 1)}>➖</button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="range"
                        value={inputStudents}
                        onChange={handleChange}
                        placeholder="Enter number of students"
                        min="0"
                        max="10"
                        step="1"
                        required
                    />
                    <span>{inputStudents}</span>
                    <button type="submit">Update Counter</button>
                </form>
            </div>
        </div>
    );
};
