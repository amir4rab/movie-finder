const Rating = ({ Source, Value }) => {
    console.log(Source, Value);
    return (
        <div>
            { Source }: { Value }
        </div>
    );
};

export default Rating;