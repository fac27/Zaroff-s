import Tile from '../components/Tile';
import image from '../public/images/camera.example.jpg';

export default function Home() {
  return (
    <>
      <Tile
        description={'akjsdnfkasd'}
        area={123123}
        price={123123}
        region={'home'}
        islandName={'my island'}
        imageUrl={image}
      />
      <h1> Hello World!</h1>
    </>
  );
}
