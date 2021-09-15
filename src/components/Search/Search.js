import React, { useContext } from "react";

import { SearchContext } from "./SearchProvider";

export default function Search() {
    const { results } = useContext(SearchContext);
    return (
        <div>
            <p>{results}</p>
        </div>
    );
}
