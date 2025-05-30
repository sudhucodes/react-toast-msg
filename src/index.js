import ToastContainer from './ToastContainer.jsx';

let addToast;

const toast = {
    show(message) {
        addToast && addToast({ message, type: 'default' });
    },
    success(message) {
        addToast && addToast({ message, type: 'success' });
    },
    error(message) {
        addToast && addToast({ message, type: 'error' });
    },
};

function _register(fn) {
    addToast = fn;
}

export { ToastContainer, toast, _register };