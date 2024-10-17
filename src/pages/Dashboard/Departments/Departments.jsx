import React, { useEffect, useState } from 'react'
import PaginationTable from '../../../components/PaginationTable/PaginationTable';

export default function Departments() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://rsr-guyana-main-server.vercel.app/api/v1/residentialProperty/get-residential');
            const result = await response.json();
            setData(result.data);

            // Define columns based on the API data structure
            setColumns([
                { field: '_id', headerName: 'ID' },
                { field: 'category', headerName: 'Category' },
                { field: 'price', headerName: 'Price' },
                { field: 'typeOfProperty', headerName: 'Property Type' },
                // Add more fields as needed
            ]);
        };
        fetchData();
    }, []);
  return (
    <div>
            <h1>Residential Properties</h1>
            {data.length > 0 && columns.length > 0 && (
                <PaginationTable data={data} columns={columns} />
            )}
    </div>
  )
}
