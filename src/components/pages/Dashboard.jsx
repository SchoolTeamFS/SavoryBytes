import { useSelector } from 'react-redux';
import '../../styles/staticsStyle.scss';
import '../../styles/dashboardStyle.css';
import { PiUsersThreeLight } from "react-icons/pi";
import { LiaComments } from "react-icons/lia";

const DashBoard = () => {
  const { username, role } = useSelector((state) => state.auth.currentUser || {});
  // Total Users
  const users = useSelector((state) => state.auth.users)
  const { normal, dietFriendly, lactoseFree } = useSelector((state) => state.recipes);
  const totalUsers = users.length
  //Total  Comments
  const allRecipes = [...normal, ...dietFriendly, ...lactoseFree];
  const Comments =  allRecipes.filter((rec) => rec.comments).flatMap((rec) => rec.comments);
  const totalComments = Comments.length
  // top 10 users 
    const userCommentCounts = Comments.reduce((acc, com) => {
      if (com.user) {
        const userId = com.user;
        acc[userId] = (acc[userId] || 0) + 1; 
      }
      return acc;
    }, {});
    const TopActiveUsers = users
    .filter((user) => userCommentCounts[user.id]) 
    .map((user) => ({
      ...user, 
      commentCount: userCommentCounts[user.id], 
    })).sort((b, a)=> a.commentCount -b.commentCount);
  

  const recipeGroups = [
    { name: "normal", data: normal },
    { name: "dietFriendly", data: dietFriendly },
    { name: "lactoseFree", data: lactoseFree },
  ];

  const categories = [
    "Main Course",
    "Appetizer",
    "Side Dish",
    "Soup",
    "Salad",
    "Dessert",
    "Snack",
  ];
  const results = {};
  const percentageVariables = {};

  recipeGroups.forEach(({ name, data }) => {
    const totalRating = data.filter((rec) => rec.rating).reduce((acc, rec) => acc + rec.rating, 0);
    const totalRecipes = data.filter((rec) => rec.rating).length;
    const averageRating = totalRating ? (totalRating / totalRecipes).toFixed(2) : 0;

    results[`${name}AverageRating`] = averageRating;

    categories.forEach((category) => {
      const categoryRating = data
        .filter((rec) => rec.rating && rec.category === category)
        .reduce((acc, rec) => acc + rec.rating, 0);
  
      const percentage = totalRating
        ? ((categoryRating / totalRating)).toFixed(2)
        : 0;
  
      const variableName = `${name}Percentage${category.replace(/\s/g, '')}`;
      percentageVariables[variableName] = percentage;
    });

  });

  const {
    normalAverageRating,
    dietFriendlyAverageRating,
    lactoseFreeAverageRating,
  } = results;

 
  const {
    normalPercentageMainCourse,
    normalPercentageAppetizer,
    normalPercentageSideDish,
    normalPercentageSoup,
    normalPercentageSalad,
    normalPercentageDessert,
    normalPercentageSnack,
    dietFriendlyPercentageMainCourse,
    dietFriendlyPercentageAppetizer,
    dietFriendlyPercentageSideDish,
    dietFriendlyPercentageSoup,
    dietFriendlyPercentageSalad,
    dietFriendlyPercentageDessert,
    dietFriendlyPercentageSnack,
    lactoseFreePercentageMainCourse,
    lactoseFreePercentageAppetizer,
    lactoseFreePercentageSideDish,
    lactoseFreePercentageSoup,
    lactoseFreePercentageSalad,
    lactoseFreePercentageDessert,
    lactoseFreePercentageSnack,
  } = percentageVariables;

  console.log(username, role, totalUsers, totalComments,'per',TopActiveUsers,'per',normalPercentageMainCourse,normalPercentageSoup);

  const types = [
    {type:'Users', total:totalUsers, icon:<PiUsersThreeLight/>},
    {type:'Comments', total:totalComments, icon:<LiaComments/>}
  ];
  const NormalCategory =[
    { cat: "Main Course", color: '#FF6838', percentage: normalPercentageMainCourse },
    { cat: "Appetizer", color: '#FFC820', percentage: normalPercentageAppetizer },
    { cat: "Side Dish", color: '#97C95C', percentage: normalPercentageSideDish },
    { cat: "Soup", color: '#1CB2F6', percentage: normalPercentageSoup},
    { cat: "Salad", color: '#1685B8', percentage: normalPercentageSalad},
    { cat: "Dessert", color: '#e6df5d', percentage: normalPercentageDessert },
    { cat: "Snack", color: '#ff3838', percentage: normalPercentageSnack }
  ]
  const DietFriendlyCategory =[
    { cat: "Main Course", color: '#FF6838', percentage: dietFriendlyPercentageMainCourse },
    { cat: "Appetizer", color: '#FFC820', percentage: dietFriendlyPercentageAppetizer },
    { cat: "Side Dish", color: '#97C95C', percentage: dietFriendlyPercentageSideDish },
    { cat: "Soup", color: '#1CB2F6', percentage: dietFriendlyPercentageSoup},
    { cat: "Salad", color: '#1685B8', percentage: dietFriendlyPercentageSalad},
    { cat: "Dessert", color: '#e6df5d', percentage: dietFriendlyPercentageDessert },
    { cat: "Snack", color: '#ff3838', percentage: dietFriendlyPercentageSnack }
  ]
  const LactoseFreeCategory =[
    { cat: "Main Course", color: '#FF6838', percentage: lactoseFreePercentageMainCourse },
    { cat: "Appetizer", color: '#FFC820', percentage: lactoseFreePercentageAppetizer },
    { cat: "Side Dish", color: '#97C95C', percentage: lactoseFreePercentageSideDish },
    { cat: "Soup", color: '#1CB2F6', percentage: lactoseFreePercentageSoup},
    { cat: "Salad", color: '#1685B8', percentage: lactoseFreePercentageSalad},
    { cat: "Dessert", color: '#e6df5d', percentage: lactoseFreePercentageDessert },
    { cat: "Snack", color: '#ff3838', percentage: lactoseFreePercentageSnack }
  ]

  const statics = [
    {type: 'Normal', rating: normalAverageRating, categories : NormalCategory},
    {type: 'Diet', rating: dietFriendlyAverageRating, categories : DietFriendlyCategory},
    {type: 'Lactos-Free', rating: lactoseFreeAverageRating, categories : LactoseFreeCategory},
  ]

  return (
    <div className="dashboard">
      <h1 className="welcome">Welcome {role} {username}!</h1>
      <div className="totals">
        {types.map((type, idx)=>(
          <div className="up-box" key={idx}>
            <div className="content">
              <div className="writhing">
                <h3>{type.type}</h3>
                <h2>{type.total}</h2>
              </div>
              <p>{type.icon} </p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="raiting">Raitings</h1>
      <div className="statics">
        {statics.map((st, idx) => (
          <div className="box" key={idx}>
            <div className="chart-content">
              <div className="chart">
                <h2>{st.type}</h2>
                <div className="donut" style={{ '--first': st.categories[0].percentage, '--second': st.categories[1].percentage, '--third': st.categories[2].percentage, '--fourth': st.categories[3].percentage, '--fifth': st.categories[4].percentage, '--sixth': st.categories[5].percentage, '--seventh': st.categories[6].percentage }}>
                  <div className="donut__slice donut__slice__first"></div>
                  <div className="donut__slice donut__slice__second"></div>
                  <div className="donut__slice donut__slice__third"></div>
                  <div className="donut__slice donut__slice__fourth"></div>
                  <div className="donut__slice donut__slice__fifth"></div>
                  <div className="donut__slice donut__slice__sixth"></div>
                  <div className="donut__slice donut__slice__seventh"></div>
                  <div className="donut__label">
                    <div className="donut__label__heading">
                      <p>Recipies Ratings</p>
                    </div>
                    <div className="donut__label__sub">
                      <p>{st.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-key">
                {st.categories.map((category) => (
                  <div className="cat" key={category.cat}>
                    <div className="square" style={{ backgroundColor: category.color }}>{category.percentage *100} %</div>
                    <p>{category.cat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
        <h1 className="raiting">Top Active Users</h1>
        <div className="top-active-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th>comments</th>
                    </tr>
                </thead>
                <tbody>
                  {TopActiveUsers.map((user)=>
                  {
                    return(
                      <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.commentCount}</td>
                    </tr>
                
                  )})}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default DashBoard;
