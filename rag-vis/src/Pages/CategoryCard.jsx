import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {

    const navigate = useNavigate();

    return (

        <div
            onClick={() => navigate(`/categories/${category.slug}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
        >

            <div className="text-5xl mb-5">
                🧠
            </div>

            <h2 className="text-2xl font-semibold">
                {category.title}
            </h2>

            <p className="text-gray-600 mt-3">
                {category.description}
            </p>

            <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg">
                Explore
            </button>

        </div>

    );
}