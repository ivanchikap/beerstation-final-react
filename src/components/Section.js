const Section = ({title, children}) => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section__title">{title}</h2>
                <div className="main">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;