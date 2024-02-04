import styles from './styles.module.scss';

const Image = ({ image }) => {
   return (
      <div className={styles.wrapper}>
         {image ? <img src={image} alt='news' className={styles.image}></img> : null}
      </div>
   );
};

export default Image;
