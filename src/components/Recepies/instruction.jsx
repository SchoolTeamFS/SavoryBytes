import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Instruction = () => {
    const { title } = useParams();
    const recipes = useSelector((state) => [
        ...state.recipes.normal,
        ...state.recipes.lactoseFree,
        ...state.recipes.dietFriendly,
    ]);

    const recipe = recipes.find(
        (r) => r.recipeTitle.toLowerCase().replace(/ /g, "-") === title.toLowerCase()
    );

    return (
        <div>
            <h2>Instructions</h2>
            <ol>
                {recipe.preparationSteps.map((instruction, index) => (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "20px",
                                height: "20px",
                                border: "2px solid #B55D51",
                                borderRadius: "4px",
                                marginRight: "10px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#fff",
                                backgroundColor: "#B55D51",
                            }}
                        >
                            {index + 1}
                        </div>
                        <span>{instruction}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Instruction;
