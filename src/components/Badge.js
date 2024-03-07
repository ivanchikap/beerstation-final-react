const Badge = ({text, type}) => {
    const style = `badge ${type}`;
    return (
        <div className={style}>
            {text || 'default text'}
        </div>
    );
};

export default Badge;