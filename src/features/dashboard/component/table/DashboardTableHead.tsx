export const DashboardTableHead = () => {
    const TheadData = [
        {
            id: 1,
            columns: [
                { title: "Product" },
                { title: "Prize" },
                { title: "Description" },
                { title: "Category" },
                { title: "Image" },
                { title: "Rate" },
                { title: "Count" },
                { title: "Action" },
            ]
        }
    ];
    return (
        <>
            {TheadData.map((item) => (
                <thead key={item.id}>
                    <tr>
                        {item.columns.map((column, index) => (
                            <th key={index} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">{column.title}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
            ))}
        </>
    )
}