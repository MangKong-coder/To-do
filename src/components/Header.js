import Button from './Button'

const Header = ({ title, onAdd, propShowAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={propShowAdd ? 'red' : 'green'} text={propShowAdd ? 'Cancel' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header
