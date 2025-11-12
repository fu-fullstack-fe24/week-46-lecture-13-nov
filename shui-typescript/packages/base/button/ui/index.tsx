import './index.css';

type Props = {
    text : string,
    type : string,
    icon : string,
    onClick : () => void,
    disabled : boolean
}

export const Button = ({text, type, icon, onClick, disabled} : Props) => {
    return (
        <button 
            className={`button ${type}`} 
            onClick={onClick}
            disabled={ disabled }
        >
            {icon && <img width="24" height="24" src={icon} alt="" />}
            <span>{text}</span>
        </button>
    )
}   
