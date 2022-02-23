import {useState, useEffect} from 'react';
import {Box, Select, Text, Flex, Input,  Spinner, Icon, Button, } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';
import router from 'next/router';

import {filterData, getFilterValues} from '../utils/filterData';

const SearchFiltes = () => {

    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const {query} = router
        /* console.log({path});
        console.log({query}) */
        const values = getFilterValues(filterValues)  //Here we brought values for only the items that changed 

        values.forEach((item) => {                          //values are now mapped and then we 
            if(item.value && filterValues?.[item.name]) {   //updated their values so it can be pushed.
                query[item.name] = item.value 
            }                //We are also checking if the particular item has a value and that particular item is also present in the filteredValues only then set them in the query.
        })

        router.push({pathname: path, query}) //Here we are pushing back the updated query into path for all the items that changed. //in ES6 query : query is same as writing query...when both key:value pair are same  
    }

return(
    <Flex bg="gray.200" p="4" justifyContent="center" flexWrap="wrap">
        
        {
            filters.map((filter) => (
                <Box>
                    <Select
                    placeholder={filter.queryName}
                    onChange={(e) => searchProperties({[filter.queryName] : e.target.value})}
                    >
                        {
                            filter.items.map((item) => (
                                <option value={item.value}>{item.name}</option>
                            ))
                        }
                    </Select>
                </Box>
            ))
        }
    </Flex>
)
}

export default SearchFiltes