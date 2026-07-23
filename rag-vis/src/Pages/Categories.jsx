import { useEffect, useState } from "react";
import api from "../api/app";
import CategoryCard from "./CategoryCard";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const fetchCategories = async () => {
            try {

                const response = await api.get("/categories");

                setCategories(response.data.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();

    }, []);

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto py-12 px-6">

                <h1 className="text-4xl font-bold mb-10 text-center">
                    AI Categories
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {categories.map((category) => (
                        <CategoryCard
                            key={category._id}
                            category={category}
                        />
                    ))}

                </div>

            </div>

        </div>

    );
}