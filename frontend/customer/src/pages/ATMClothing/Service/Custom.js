import React from 'react';
import classes from './Custom.module.scss';
import CustomFormStep1 from './Form/CustomFormStep1';
import CustomFormStep2 from './Form/SellFormStep2';
import FormStep3 from './Form/FormStep3';
import FormStepSuccess from './Form/FormStepSuccess';
import FormStepFail from './Form/FormStepFail';

const Custom = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.container}>
            <CustomFormStep1 />
            <br />
            <CustomFormStep2 content="CUSTOM SẢN PHẨM" />
            <br />
            <FormStep3 content="CUSTOM SẢN PHẨM" />
            <br />
            <FormStepSuccess content="CUSTOM SẢN PHẨM" />
            <br />
            <FormStepFail content="CUSTOM SẢN PHẨM" />
        </div>
    </div>
);

export default Custom;
