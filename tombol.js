import styles from './Belajar.css';

const Tombol = (props) => {
    
     const handleButtonClick = () => {
     props.onTombolClick(props.children);
     }
    
     return (
    <button className={styles.tombol} onClick={handleButtonClick}>
     {props.children}
     </button>
      )
     }
    
     export default Tombol;