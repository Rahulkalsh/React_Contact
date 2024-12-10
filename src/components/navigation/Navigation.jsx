import style from './Navigation.module.css';

const Navigation = () => {
  console.log(style)
  return (
    <nav className={`${style.navigation} container`}>
      <div className={`${style.logo}`}>
        <img src="images\download (1).jpg" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
