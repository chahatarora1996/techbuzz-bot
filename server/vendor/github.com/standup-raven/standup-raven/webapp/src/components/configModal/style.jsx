function getStyle() {
    return {
        controlLabel: {
            paddingRight: '10px',
            width: '180px',
        },
        controlLabelX: {
            paddingRight: '10px',
            paddingLeft: '10px',
        },
        formGroup: {
            marginBottom: '20px',
            minHeight: '35px',
        },
        formGroupNoMarginBottom: {
            marginBottom: '0',
        },
        sections: {
            marginBottom: '10px',
        },
        sectionGroup: {
            maxHeight: '300px',
            overflowY: 'auto',
        },
        spinner: {
            width: '80px',
            display: 'block',
            margin: '50px auto',
        },
        scrollY: {
            overflowY: 'scroll',
        },
        alert: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            borderRadius: '5px',
            whiteSpace: 'pre-line',
            animation: 'pop 0.2s ease-in',
        },
        body: {
            minHeight: '380px',
        },
    };
}

export default {
    getStyle,
};
