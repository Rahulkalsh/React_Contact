import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({isSecondary, icon, text, ...rest}) => {
    // const {isSecondary,icon,text} = props
  return (
    <button {...rest} className={isSecondary ? styles.secondary_btn :styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button