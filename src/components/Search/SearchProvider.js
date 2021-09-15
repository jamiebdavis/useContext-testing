import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("Test Search");
    const [results, setResults] = useState(null);

    const fetchResults = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
            const data = await res.data.title;
            setResults(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    const contextValue = { searchTerm, results };

    return (
        <div>
            <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
        </div>
    );
}
