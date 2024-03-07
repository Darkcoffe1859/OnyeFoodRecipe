import React, { useState } from 'react';
import UnsplashImages from './components/Unsplash/UnsplashImages';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Login from './components/Auth/Login';
import RecipeList from './components/Recipe/RecipeList';
import BreakfastData from './Data/breakfast';
import LunchData from './Data/lunch';
import DinnerData from './Data/dinner';
import './components/styles/styles.scss';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const backgroundImageStyle = {
    backgroundImage: `url('./assets/background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundImageStyle}>
      <Header />
      <UnsplashImages />
      {user ? (
        <RecipeList
          breakfastRecipes={BreakfastData}
          lunchRecipes={LunchData}
          dinnerRecipes={DinnerData}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Footer />
    </div>
  );
};

export default App;

