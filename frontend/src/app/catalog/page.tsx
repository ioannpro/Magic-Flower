import Catalog from "@/components/screens/catalog/catalog";



async function getData() {
    const response = await fetch('http://127.0.0.1:8000/item/all', {
    next: {
        revalidate: 60
    }
});

    return response.json();
}

export default async function CatalogPage() {
    const data = await getData()

    return (
            <Catalog data = { data }/>
        )
}