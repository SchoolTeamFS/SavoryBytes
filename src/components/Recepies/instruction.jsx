import { useParams } from "react-router";
import { useSelector } from "react-redux";
import RelatedRecipes from "./related";

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
        <div style={{ marginLeft: "40px" }}>
            <h2>Instructions</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {/* Section des instructions */}
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

                {/* Section des recettes associées */}
                <div style={{ marginLeft: "20px", marginTop: "-50px" }}>
                    <RelatedRecipes currentRecipe={recipe} />
                </div>
            </div>
        </div>
    );
};

export default Instruction;
