/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './OptionalDetails.module.scss';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';

const OptionalDetails = () => (
    <>
        <div className={classes.main__section}>
            <p className={classes.detail__product}>Hình ảnh sản phẩm</p>
            <div className={classes.upload__img__container}>
                <div className={classes.img__section}>
                    <p>Ảnh mặt trước sản phẩm</p>
                    <ButtonCT
                        // eslint-disable-next-line react/jsx-indent-props
                        className={classes.btn__choose}
                        borderRadius
                        content="Chọn"
                    />
                </div>
                <div className={classes.img__section}>
                    <p>Ảnh mặt sau sản phẩm</p>
                    <ButtonCT
                        // eslint-disable-next-line react/jsx-indent-props
                        className={classes.btn__choose}
                        borderRadius
                        content="Chọn"
                    />
                </div>
            </div>
            <p className={classes.detail__product}>Mô tả sản phẩm</p>
            <textarea className={classes.description__input} rows="6" cols="93" placeholder="Mô tả..." />
            <p className={classes.detail__product}>Thông tin khác</p>
            <div className={classes.input__container}>
                <div className={classes.input__container}>
                    <input className={classes.input__material} readOnly placeholder="Chất liệu" required />
                    <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                </div>
                <input className={classes.input__size} placeholder="Kích cỡ (Ví dụ: S, XL, 29, 30...)" required />
            </div>
        </div>
        <ButtonCT
            greenLinear
            content="Hoàn tất"
            style={{
                width: '140px',
                padding: '1rem 0rem',
                borderRadius: '50px',
                marginLeft: 'auto',
                marginRight: '4rem',
                fontSize: '1.6rem',
                marginBottom: '3rem',
            }}
        />
    </>
);

export default OptionalDetails;