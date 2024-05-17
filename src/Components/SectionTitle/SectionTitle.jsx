

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">---{subheading}---</p>
            <h2 className="text-4xl uppercase border-y-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;