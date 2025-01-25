import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Chemin = () => {
    const { mode, categ, title } = useParams();
  
    const recipes = useSelector(state => [
      ...state.recipes.normal,
      ...state.recipes.lactoseFree,
      ...state.recipes.dietFriendly
    ]);

    const recipe = recipes.find(
        r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title?.toLowerCase()
    );

    return (    
        <span style={{ fontStyle: 'italic', color: 'gray', marginLeft: '40px' }}>
            {/* Afficher le lien pour Mode */}
            {mode && (
                <Link 
                    to={`/${mode}`} 
                    style={{ color: 'gray', textDecoration: 'none', textTransform: 'uppercase' }}
                >
                    Mode{' > '}{mode}
                </Link>
            )}

            {/* Afficher le lien pour Category */}
            {mode && categ && (
                <>
                    {' > '}
                    <Link 
                        to={`/${mode}/${categ.replace(/\s+/g, '-')}`} 
                        style={{ color: 'gray', textDecoration: 'none', textTransform: 'uppercase' }}
                    >
                        {categ}
                    </Link>
                </>
            )}

            {/* Afficher le lien pour le titre de la recette */}
            {mode && categ && title && (
                <>
                    {' > '}
                    <Link 
                        to={`/${mode}/${categ.replace(/\s+/g, '-')}/${title.replace(/\s+/g, '-')}`} 
                        style={{ color: 'gray', textDecoration: 'none',  textTransform: 'uppercase' }}
                    >
                        {recipe?.recipeTitle}
                    </Link>
                </>
            )}
        </span>
    );
};

export default Chemin;
