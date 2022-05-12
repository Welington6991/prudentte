import React from 'react';
import { useState } from 'react';
import {
    ContentSearch,
    SearchInput,
    IconSearch
} from './styles';

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <ContentSearch>
            <SearchInput value={search} onChangeText={(text) => setSearch(text)} />
            <IconSearch />
        </ContentSearch>
    );
};

export default Search;
