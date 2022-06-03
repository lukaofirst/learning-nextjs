import Link from 'next/link';

function ClientsPage() {
    const clients = [
        { id: 'lucas', name: 'Lucas' },
        { id: 'arthur', name: 'Arthur' },
    ];

    return (
        <div>
            <h1>Clients Page</h1>
            <ul>
                {clients.map((client) => {
                    return (
                        <li key={client.id}>
                            <Link
                                href={{
                                    pathname: '/clients/[id]',
                                    query: { id: client.id },
                                }}
                            >
                                {client.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ClientsPage;
