import React, { useState, useEffect } from 'react';

export default function Search() {
    const [values, setValues] = useState({
        searchText: "",
        amount: 10,
        apiURL: "https://pixabay.com/api/",
        apiKEY: "12934050-8ec0a638fd2c435f0663868f5",
        images: [],
    });

    useEffect(() => {
        async function fetchData(){
            const data = await fetch(`${values.apiURL}?key=${values.apiKEY}`);
            const jsonData = await data.json();
            // console.log(jsonData);
            setValues({...values, images: [...jsonData.hits.slice(values.amount)]});
        }
        fetchData();
    }, []);

    const handleChange = e => setValues({...values, searchText: e.target.value});
    console.log(values.images);
    return (
        <div className="search-container">
            <form>
                <label><input type="text" onChange={handleChange} value={values.searchText}/></label>
                <label>
                    {/* logic to change amolunt has to be implemented */}
                </label>
            </form>
        </div>
    )
}
