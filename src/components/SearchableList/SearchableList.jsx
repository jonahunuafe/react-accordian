import { useState } from "react";

export default function SearchableList({ items }) {
    const [searchItem, setSearchItem] = useState("");

    const searchResults = items.filter((item) => 
        JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
    );

    function handleChange(event) {
        setSearchItem(event.target.value);
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={index}>{item.toString()}</li>
                ))}
            </ul>
        </div>
    );
}