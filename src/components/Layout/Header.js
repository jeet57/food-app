import HeaderCartButton from "./HeaderCartButton";
import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};
export default Header;
