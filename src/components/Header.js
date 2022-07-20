import '../Styles/Header.scss';

const Header = () => {
    return (
        <div className="meme-header">
            <div className='meme-logo'>
                <img src="./images/trollface.png" alt="troll" className="troll-photo"></img>
                <h2>Meme Generator</h2>
            </div>
            <div className="project">
                <h4>React Course - Project 3</h4>
            </div>
        </div>
    );
}
 
export default Header;