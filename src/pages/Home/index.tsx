import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer, Mapa} from './style';
import Header from '../../components/Header/Header';
import mapa from '../../assets/mapa.png'

const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/About');
    }
  return (
    <>
      <Header />
      {/* Só exemplo de como vamos fazer o mapa */}
      <HomeContainer>
        <Mapa src={mapa} alt='mapa'/>
      </HomeContainer>
    </>
  );
};

export default Home;
