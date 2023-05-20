import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkStatus('Under construction'));
  }, [dispatch]);

  return (
    <div>
      <h3 className={styles['under-construction']}>{categoryList}</h3>
    </div>
  );
};
export default Categories;
