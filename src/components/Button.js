import '../index.css';

const Button = ({ text, color, onClick }) => {
    return (
        <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {

}

export default Button
