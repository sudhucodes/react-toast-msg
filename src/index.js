import ToastContainer from './ToastContainer.jsx';
import './global.css';

let addToast;

const toast = {
    success(message) {
        addToast && addToast({ message, type: 'success' });
    },
    error(message) {
        addToast && addToast({ message, type: 'error' });
    }
};

function _register(fn) {
    addToast = fn;
}

export { ToastContainer, toast, _register };