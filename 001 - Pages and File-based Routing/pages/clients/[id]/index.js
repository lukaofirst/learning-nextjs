import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    const {
        query: { id },
    } = router;

    return (
        <div>
            <h1>Projects of a Given Client: {id}</h1>
        </div>
    );
}

export default ClientProjectsPage;
