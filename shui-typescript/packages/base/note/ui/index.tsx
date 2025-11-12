import './index.css';
import type { Note as NoteType } from '@shui/interfaces';
import { getRandomColor, getRotationDirection } from '@shui/utils'; 

type Props = {
    note : NoteType
}

export const Note = ({note} : Props) => {
    return (
        <li className={`note note--${getRandomColor()} note--${getRotationDirection()}`}>
            <span className="note__tape"></span>
            <section className="note__top">
                <h2 className="note__title">{note.title}</h2>
                <p className="note__text">
                    { note.text }
                </p>
            </section>
            <section className="note__bottom">
                <h3 className="note__user">{note.username}</h3>
                <p className="note__date">
                    <i className="fa-regular fa-clock"></i>
                    {/* {note.updatedAt ? timeAgo(note.updatedAt) : timeAgo(note.createdAt)} */}
                </p>
            </section>
        </li>
    );
};