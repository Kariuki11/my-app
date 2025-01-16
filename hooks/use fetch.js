const { useState } = require("react");
const { useFormState } = require("react-dom");

const useFetch = (cb) => {
    const [data, setData] = useFormState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
    };

    try {
        const response = await cb(...args);
        setData(response);
        setError(null)
    } catch (error) {
        
    }

    return{ data, loading, error, fn, setData };
};

export default useFetch