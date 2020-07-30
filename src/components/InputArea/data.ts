import {ButtonProps} from '../Button';
import styles from './style.css?module'
const buttons : Array<ButtonProps> = [
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "7",
        className : `${styles['hide-border-top']} ${styles['hide-border-left']}`,
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "8",
        className : styles['hide-border-top']
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "9",
        className : styles['hide-border-top']
    },
    {
        background: "#B15E5E",
        color:"#FFFFFF",
        symbol : "c",
        className : `${styles['hide-border-top']} ${styles['hide-border-right']}`
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "4",
        className : styles['hide-border-left']
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "5"
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "6"
    },
    {
        background: "#B15E5E",
        color:"#FFFFFF",
        symbol : "-",
        className : styles['hide-border-right']
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "1",
        className : styles['hide-border-left']
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "2"
    },
    {
        background: "#D8D8D8",
        color:"#000000",
        symbol : "3"
    },
    {
        background: "#B15E5E",
        color:"#FFFFFF",
        symbol : "+",
        className : styles['hide-border-right']
    },
]

export default buttons;