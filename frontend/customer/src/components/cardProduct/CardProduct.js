/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './CardProduct.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';
import auth from '../../utils/auth';
import { addToCart } from '../../store/reducers/cartSlice';

const CardProduct = ({ cardproduct2, Details }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (auth.getAccessToken()) {
      dispatch(addToCart({ data: {
        idUser: auth.getId(),
        idProduct: Details._id,
        size: Details.size,
        quality: 1
      } }));
    } else {
      console.log('No login');
    }
  };

  return (
    <div className={`${classes.cardproduct} ${cardproduct2 && classes.cardproduct2}`}>
        <div className={classes.cardproduct__img}>
            <img src={Details.img} alt="" />
        </div>
       <div className={classes.cardproduct__content}>
            <div className={classes.cardproduct__container}>
                    <h1 className={classes.cardproduct__name}>{Details.name}</h1>
                    <h1 className={classes.cardproduct__price}>
                        {Details.price}
                        {' '}
                        <u>đ</u>
                    </h1>
                    { Details.facility && Details.facility.length ? (
                      <div className={classes.cardproduct__address}>
                        <i><FontAwesomeIcon icon={faLocationDot} /></i>
                        <p>{Details.facility[0].name}</p>
                      </div>
                    ) : <span>&nbsp;</span>}
            </div>
            <div>
            <ButtonCT
              primary
              medium
              className={classes.btn}
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </ButtonCT>
            </div>
       </div>
    </div>
  );
};
CardProduct.propTypes = {
  cardproduct2: PropTypes.bool,

  Details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    facility: PropTypes.array,
    _id: PropTypes.string,
    size: PropTypes.string
  }),
};
CardProduct.defaultProps = {
  cardproduct2: null,
  Details: {},
};

export default CardProduct;
