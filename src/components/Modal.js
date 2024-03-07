const Modal = ({close, children}) => {
    const clickHandler = (e) => {
        e.preventDefault();

        if (!e.target.classList.contains('modal__wrapper')) {
            return
        }
        close()
    }

    return (
        <div className='modal__wrapper' onClick={clickHandler}>
            <div className="modal">
                {children}
            </div>
        </div>
    );
};

export default Modal;