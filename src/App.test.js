import { render, screen, waitFor } from "@testing-library/react";

import Home from "./container/Home";
import Search from "./components/Search/Search";
import SearchProvider from "./components/Search/SearchProvider";

// test("renders <Home />", async () => {
//     render(<Home />);

//     const result = await waitFor(() => screen.getByText("delectus aut autem"));
//     expect(result).toBeInTheDocument();
// });

test("renders <Search />", async () => {
    render(
        <SearchProvider>
            <Search />
        </SearchProvider>
    );

    const result = await waitFor(() => screen.getByText("delectus aut autem"));
    expect(result).toBeInTheDocument();
});
