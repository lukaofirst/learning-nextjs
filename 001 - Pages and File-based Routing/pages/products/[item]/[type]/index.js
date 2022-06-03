import { useRouter } from 'next/router';

const ItemType = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Item Type</h1>
        </div>
    );
};

export default ItemType;
