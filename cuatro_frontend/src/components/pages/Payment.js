import React, { Component, useEffect } from 'react'



const Payment = (props) => {
    console.log(props.orderPrice)
    const options = {
        key: 'rzp_test_VdCgvaxDubfJRI',
        amount: props.orderPrice, //  = INR 1
        name: 'Acme shop',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <button className="btn btn-custom " style={{backgroundColor:"#34495e"}} onClick={openPayModal}>Pay with Razorpay</button>
        </div>
    );
};

export default Payment;

