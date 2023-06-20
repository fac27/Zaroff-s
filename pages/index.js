import Tile from '../components/Tile';
import image from '../public/images/camera.example.jpg';

const islandExample = {
  description: 'helipad, bar, beach',
  area: 100,
  price: 700000,
  region: 'caribbean',
  islandName: 'Los Islandes',
  imageUrl: image,
};

export default function Home() {
  return (
    <>
      <Tile island={islandExample} />
    </>
  );
}
