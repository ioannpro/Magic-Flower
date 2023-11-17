'use client'
import BackgroundCatalog from "@/components/backgrounds/backgroundCatalog";
import style from "./catalog.module.scss"
import BlockTitle from "@/components/ui/blockTitle";
import Container from "@/components/ui/container";
import BlockCheckInput from "@/components/ui/blockCheckInput";
import ItemCard from "@/components/itemcard/itemCard";
import { useState, useMemo, useEffect } from "react";
import { rubik } from "@/components/fonts";


export default function Catalog({data} : any) {
    const [filters, setFilters] = useState(data.filters);
    const flowersList = data.filters.flowers;

    const [height, setHeight] = useState(0);
    
    useEffect( () => { setHeight(document.documentElement.scrollHeight) });

    const shaperRecipe = (id: number) => {
        const recipe = filters.recipe.find((recipe: any) => recipe.id === id);

        return recipe ? recipe.components : {};
    }

    const filterData = (products: any) => {
        let categorys = filters.categorys.map((category: any) => category.id);

        let result = products
            .filter((product: any) => product.price >= filters.price.min)
            .filter((product: any) => product.price <= filters.price.max)
            .filter((product: any) => categorys.includes(product.category));

        return result
    }

    const changeFlowers = (flower: any) => {
        let finding = false;
        let flowers = filters.flowers 

        flowers.forEach((flow: any) => {
            if (flow.id == flower.flower.id) {
                flowers = flowers.filter((flow: any) => flow.id != flower.flower.id); 
                finding = true;
            }
        })

        if (finding == false) {
            flowers = [...flowers, {id: flower.flower.id, name: flower.flower.name}]
        }

        flowers.sort((a: any, b: any) => a.id - b.id);

        return { price: { min: filters.price.min, max: filters.price.max}, categorys: filters.categorys, flowers: flowers, recipe: filters.recipe}
    }

    const items = useMemo(() => filterData(data.products), [filters]);

    return (
            <Container>
                <BackgroundCatalog height = {height}>
                    <BlockTitle>Catalog</BlockTitle>
                    <div className={style.catalog}>
                        <button className={style.catalog__filter__show_btn}>Filter</button>
                        <div className={style.catalog__filter}>
                            <div onClick={() => setFilters({price: { min: 100, max: 200}, categorys: filters.categorys, flowers: filters.flowers, recipe: filters.recipe})}>Change</div>
                            <div className={`${style.catalog__filter__title} ${rubik.className}`}>Flower</div>
                            {   flowersList.length != 0 ? 
                                flowersList.map((flower:any) => (
                                    <BlockCheckInput key = {flower.id} check = {true} change = {() => setFilters(changeFlowers({flower}))}>{flower.name}</BlockCheckInput>
                                ))
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className={style.catalog__inner}>
                            {   items.length != 0 ?
                                items.map((item: any) => (
                                    <ItemCard 
                                        key = {item.id}
                                        id = {item.id}
                                        name = {item.name}
                                        slug = {item.slug}
                                        image = {item.image}
                                        price = {item.price}
                                        recipe = {shaperRecipe(item.id)}
                                    />))
                                :
                                <div>Non Items</div>
                            }
                        </div>
                    </div>
                </BackgroundCatalog>
            </Container>
        )
}