import { Bars } from  'react-loader-spinner';
const Spinner = () => {
    return (
        <Bars
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="spinner"
            visible={true}
        />
    );
};

export default Spinner;