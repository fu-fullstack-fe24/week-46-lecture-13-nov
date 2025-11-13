import './index.css';
import { Note } from '@shui/note';
import { useGetNotesQuery } from '@shui/api';

export const NoteList = () => {
    const { data : notes, isLoading, isError } = useGetNotesQuery();

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error...</p>

    return (
        <ul className="note-list">
            {
                notes && notes.notes.map((note) => {
                    return <Note key={ note.id } note={ note } />
                })
            }
        </ul>
    );
}